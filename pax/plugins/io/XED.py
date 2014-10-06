"""
This plug-in reads raw waveform data from a Xenon100 XED file.
The XED file format is documented in Guillaume Plante's PhD thesis.
This is code does not use the libxdio C-library though.

At the moment this plugin only supports:
    - sequential reading, not searching for a particular event;
    - reading a single XED file, not an entire dataset;
    - one 'chunk' per event, it raises an exception if it sees more than one chunk;
    - zle0 sample encoding, not raw;
    - bzip2 or uncompressed chunk data compression, not any other compression scheme.

None of these would be very difficult to fix, if we ever intend to do any large-scale
reprocessing of the XED-files we have.

Some metadata from the XED file is stored in event['metadata'], see the end of this
code for details.
"""

import math
import bz2

import io
import numpy as np

from pax import plugin, units
from pax.datastructure import Event


class XedInput(plugin.InputPlugin):
    file_header = np.dtype([
        ("dataset_name", "S64"),
        ("creation_time", "<u4"),
        ("first_event_number", "<u4"),
        ("events_in_file", "<u4"),
        ("event_index_size", "<u4")
    ])

    event_header = np.dtype([
        ("dataset_name", "S64"),
        ("utc_time", "<u4"),
        ("utc_time_usec", "<u4"),
        ("event_number", "<u4"),
        ("chunks", "<u4"),
        # This is where the 'chunk layer' starts... but there always seems to be one chunk per event
        # I'll always assume this is true and raise an exception otherwise
        ("type", "S4"),
        ("size", "<u4"),
        ("sample_precision", "<i2"),
        # indicating compression type.. I'll assume bzip2 always
        ("flags", "<u2"),
        ("samples_in_event", "<u4"),
        ("voltage_range", "<f4"),
        ("sampling_frequency", "<f4"),
        ("channels", "<u4"),
    ])

    def startup(self):
        if self.config['input_specification'] is not None:
            filename = self.config['input_specification']
        else:
            filename = self.config['filename']
        self.input = open(filename, 'rb')

        # Read metadata and event positions from the XED file
        self.file_metadata = np.fromfile(self.input, dtype=XedInput.file_header, count=1)[0]
        self.event_positions = np.fromfile(self.input, dtype=np.dtype("<u4"),
                                           count=self.file_metadata['event_index_size'])
        if self.file_metadata['events_in_file'] > self.file_metadata['event_index_size']:
            raise RuntimeError(
                "The XED file claims there are %s events in the file, but the event position index has only %s entries!" %
                (self.file_metadata['events_in_file'], self.file_metadata['event_index_size'])
            )
        if self.file_metadata['events_in_file'] < self.file_metadata['event_index_size']:
            self.log.debug(
                ("The XED file claims there are %s events in the file, while the event position index has %s entries. " +
                "Is this the last XED file of a dataset?" ) %
                (self.file_metadata['events_in_file'], self.file_metadata['event_index_size'])
            )
            self.event_positions = self.event_positions[:self.file_metadata['events_in_file']]
        self.first_event = self.file_metadata['first_event_number']
        self.last_event =  self.file_metadata['first_event_number'] + self.file_metadata['events_in_file'] - 1

    def shutdown(self):
        self.input.close()

    # Temp for old API compatibility
    def get_events(self):
        for event_position_i, event_position in enumerate(self.event_positions):
            yield self.get_single_event(self.file_metadata['first_event_number'] + event_position_i)

    def get_single_event(self, event_number):
        # Superfluous, Pax should do this check already:
        if not self.first_event <= event_number <= self.last_event:
            raise RuntimeError("Event %s asked, but XED file contains only event %s - %s!" % (
                event_number, self.first_event, self.last_event
            ))

        # Seek to the requested event
        self.input.seek(self.event_positions[event_number - self.first_event])

        # Read event metadata, check if we can read this.
        event_layer_metadata = np.fromfile(self.input,
                                           dtype=XedInput.event_header,
                                           count=1)[0]
        if event_layer_metadata['chunks'] != 1:
            raise NotImplementedError(
                "The day has come: event with %s chunks found!" % event_layer_metadata['chunks'])
        if event_layer_metadata['type'] != b'zle0':
            raise NotImplementedError(
                "Still have to code grokking for sample type %s..." % event_layer_metadata['type'])
        # Read the channel bitmask to find out which channels are included in this event.
        # Lots of possibilities for errors here: 4-byte groupings, 1-byte groupings, little-endian...
        # Checked (for 14 events); agrees with channels from
        # LibXDIO->Moxie->MongoDB->MongoDBInput plugin
        mask_bytes = 4 * math.ceil(event_layer_metadata['channels'] / 32)
        # This DID NOT WORK, but almost... so very dangerous..
        # mask = np.unpackbits(np.array(list(
        #     np.fromfile(self.input, dtype=np.dtype('<S%s' % mask_bytes), count=1)[0]
        # ), dtype='uint8'))
        # This appears to work... so far...
        mask_bits = np.unpackbits(
            np.fromfile(self.input, dtype='uint8', count=mask_bytes))
        # +1 as first pmt is 1 in Xenon100
        channels_included = [
            i + 1 for i, bit in enumerate(reversed(mask_bits)) if bit == 1]

        # Decompress the event data (actually, the data from a single 'chunk')
        # into fake binary file
        # 28 is the chunk header size.
        data_to_decompress = self.input.read(
            event_layer_metadata['size'] - 28 - mask_bytes)
        try:
            chunk_fake_file = io.BytesIO(bz2.decompress(data_to_decompress))
        except OSError:
            # Maybe it wasn't compressed after all? We can at least try
            # TODO: figure this out from flags
            chunk_fake_file = io.BytesIO(data_to_decompress)

        # Loop over all channels in the event
        occurrences = {}
        for channel_id in channels_included:
            occurrences[channel_id] = []

            # Read channel size (in 4bit words), subtract header size, convert
            # from 4-byte words to bytes
            channel_data_size = int(
                4 * (np.fromstring(chunk_fake_file.read(4), dtype='<u4')[0] - 1))

            # Read the channel data into another fake binary file
            channel_fake_file = io.BytesIO(
                chunk_fake_file.read(channel_data_size))

            # Read the channel data control word by control word.
            # sample_position keeps track of where in the waveform a new
            # occurrence should be placed.
            sample_position = 0
            while 1:

                # Is there a new control word?
                control_word_string = channel_fake_file.read(4)
                if not control_word_string:
                    break

                # Control words starting with zero indicate a number of sample
                # PAIRS to skip
                control_word = int(
                    np.fromstring(control_word_string, dtype='<u4')[0])
                if control_word < 2 ** 31:
                    sample_position += 2 * control_word
                    continue

                # Control words starting with one indicate a number of sample
                # PAIRS follow
                else:
                    # Subtract the control word flag
                    data_samples = 2 * (control_word - (2 ** 31))

                    # Note endianess
                    samples_occurrence = np.fromstring(channel_fake_file.read(2 * data_samples),
                                                       dtype="<i2")

                    occurrences[channel_id].append((sample_position,
                                                    samples_occurrence))
                    sample_position += len(samples_occurrence)

        # Return the event
        event = Event()
        event.event_number = int(event_layer_metadata['event_number'])
        event.occurrences = occurrences

        # TODO: don't hardcode sample size...
        event.sample_duration = int(10 * units.ns)
        event.start_time = int(
            event_layer_metadata['utc_time'] * units.s +
            event_layer_metadata['utc_time_usec'] * units.us
        )
        # Remember stop_time is the stop time of the LAST sample!
        event.stop_time = event.start_time + \
            int(event_layer_metadata[
                'samples_in_event'] * event.sample_duration)
        return event

    # If we get here, all events have been read
    # self.input.close()