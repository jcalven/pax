Search.setIndex({envversion:47,filenames:["authors","contributing","faq","format","history","index","modules","pax","pax.plugins","pax.plugins.corrections","pax.plugins.for_tests","pax.plugins.io","pax.plugins.posrec","pax.plugins.signal_processing","plugin","position_reconstruction","pyroot","readme","usage"],objects:{"":{pax:[7,0,0,"-"]},"pax.core":{Processor:[7,4,1,""]},"pax.core.Processor":{fallback_configuration:[7,3,1,""],get_metadata:[7,1,1,""],get_plugin_by_name:[7,1,1,""],get_plugin_search_paths:[7,7,1,""],instantiate_plugin:[7,1,1,""],load_configuration:[7,1,1,""],process_event:[7,1,1,""],run:[7,1,1,""],setup_logging:[7,1,1,""],stop:[7,1,1,""]},"pax.data_model":{ListField:[7,4,1,""],Model:[7,4,1,""],StrictModel:[7,4,1,""]},"pax.data_model.Model":{from_bson:[7,6,1,""],from_json:[7,6,1,""],get_fields_data:[7,1,1,""],get_list_field_info:[7,6,1,""],to_bson:[7,1,1,""],to_dict:[7,1,1,""],to_json:[7,1,1,""]},"pax.datastructure":{Event:[7,4,1,""],Hit:[7,4,1,""],Peak:[7,4,1,""],Pulse:[7,4,1,""],ReconstructedPosition:[7,4,1,""],SumWaveform:[7,4,1,""]},"pax.datastructure.Event":{S1s:[7,1,1,""],S2s:[7,1,1,""],all_hits:[7,3,1,""],dataset_name:[7,3,1,""],duration:[7,1,1,""],empty_event:[7,6,1,""],event_number:[7,3,1,""],get_sum_waveform:[7,1,1,""],get_sum_waveform_names:[7,1,1,""],is_channel_suspicious:[7,3,1,""],length:[7,1,1,""],n_channels:[7,3,1,""],n_hits_rejected:[7,3,1,""],noise_pulses_in:[7,3,1,""],peaks:[7,3,1,""],pulses:[7,3,1,""],sample_duration:[7,3,1,""],start_time:[7,3,1,""],stop_time:[7,3,1,""],sum_waveforms:[7,3,1,""]},"pax.datastructure.Hit":{area:[7,3,1,""],center:[7,3,1,""],channel:[7,3,1,""],found_in_pulse:[7,3,1,""],height:[7,3,1,""],index_of_maximum:[7,3,1,""],is_rejected:[7,3,1,""],left:[7,3,1,""],length:[7,3,1,""],noise_sigma:[7,3,1,""],right:[7,3,1,""]},"pax.datastructure.Peak":{area:[7,3,1,""],area_fraction_top:[7,3,1,""],area_per_channel:[7,3,1,""],bottom_hitpattern_spread:[7,3,1,""],contributing_channels:[7,3,1,""],detector:[7,3,1,""],does_channel_contribute:[7,3,1,""],does_channel_have_noise:[7,3,1,""],height:[7,3,1,""],hit_time_mean:[7,3,1,""],hit_time_std:[7,3,1,""],hits:[7,3,1,""],index_of_maximum:[7,3,1,""],left:[7,3,1,""],mean_amplitude_to_noise:[7,3,1,""],n_contributing_channels:[7,3,1,""],n_noise_channels:[7,3,1,""],noise_channels:[7,3,1,""],range_50p_area:[7,3,1,""],range_90p_area:[7,3,1,""],reconstructed_positions:[7,3,1,""],right:[7,3,1,""],top_hitpattern_spread:[7,3,1,""],type:[7,3,1,""]},"pax.datastructure.Pulse":{baseline:[7,3,1,""],channel:[7,3,1,""],left:[7,3,1,""],length:[7,3,1,""],maximum:[7,3,1,""],minimum:[7,3,1,""],noise_sigma:[7,3,1,""],raw_data:[7,3,1,""],right:[7,3,1,""]},"pax.datastructure.ReconstructedPosition":{algorithm:[7,3,1,""],goodness_of_fit:[7,3,1,""],ndf:[7,3,1,""],phi:[7,3,1,""],r:[7,3,1,""],x:[7,3,1,""],y:[7,3,1,""]},"pax.datastructure.SumWaveform":{channel_list:[7,3,1,""],detector:[7,3,1,""],is_filtered:[7,1,1,""],name:[7,3,1,""],name_of_filter:[7,3,1,""],samples:[7,3,1,""]},"pax.exceptions":{OutputFileAlreadyExistsError:[7,2,1,""],PulseBeyondEventError:[7,2,1,""]},"pax.formats":{BulkOutputFormat:[7,4,1,""],HDF5Dump:[7,4,1,""],NumpyDump:[7,4,1,""],PandasCSV:[7,4,1,""],PandasFormat:[7,4,1,""],PandasHDF5:[7,4,1,""],PandasHTML:[7,4,1,""],PandasJSON:[7,4,1,""],ROOTDump:[7,4,1,""]},"pax.formats.BulkOutputFormat":{close:[7,1,1,""],data_types_present:[7,3,1,""],file_extension:[7,3,1,""],open:[7,1,1,""],prefers_python_strings:[7,3,1,""],read_data:[7,1,1,""],supports_append:[7,3,1,""],supports_array_fields:[7,3,1,""],supports_read_back:[7,3,1,""],supports_write_in_chunks:[7,3,1,""],write_data:[7,1,1,""]},"pax.formats.HDF5Dump":{close:[7,1,1,""],data_types_present:[7,3,1,""],file_extension:[7,3,1,""],n_in_data:[7,1,1,""],open:[7,1,1,""],read_data:[7,1,1,""],supports_array_fields:[7,3,1,""],supports_read_back:[7,3,1,""],supports_write_in_chunks:[7,3,1,""],write_data:[7,1,1,""]},"pax.formats.NumpyDump":{close:[7,1,1,""],data_types_present:[7,3,1,""],f:[7,3,1,""],file_extension:[7,3,1,""],n_in_data:[7,1,1,""],open:[7,1,1,""],read_data:[7,1,1,""],supports_array_fields:[7,3,1,""],supports_read_back:[7,3,1,""],write_data:[7,1,1,""]},"pax.formats.PandasCSV":{pandas_format_key:[7,3,1,""]},"pax.formats.PandasFormat":{open:[7,1,1,""],pandas_format_key:[7,3,1,""],supports_array_fields:[7,3,1,""],write_data:[7,1,1,""],write_pandas_dataframe:[7,1,1,""]},"pax.formats.PandasHDF5":{close:[7,1,1,""],data_types_present:[7,3,1,""],file_extension:[7,3,1,""],n_in_data:[7,1,1,""],open:[7,1,1,""],prefers_python_strings:[7,3,1,""],read_data:[7,1,1,""],string_data_length:[7,3,1,""],supports_append:[7,3,1,""],supports_read_back:[7,3,1,""],supports_write_in_chunks:[7,3,1,""],write_pandas_dataframe:[7,1,1,""]},"pax.formats.PandasHTML":{pandas_format_key:[7,3,1,""]},"pax.formats.PandasJSON":{pandas_format_key:[7,3,1,""]},"pax.formats.ROOTDump":{close:[7,1,1,""],data_types_present:[7,3,1,""],file_extension:[7,3,1,""],n_in_data:[7,1,1,""],numpy_type:[7,3,1,""],open:[7,1,1,""],read_data:[7,1,1,""],root_type:[7,3,1,""],supports_array_fields:[7,3,1,""],supports_read_back:[7,3,1,""],supports_write_in_chunks:[7,3,1,""],write_data:[7,1,1,""]},"pax.plugin":{BasePlugin:[7,4,1,""],InputPlugin:[7,4,1,""],OutputPlugin:[7,4,1,""],TransformPlugin:[7,4,1,""]},"pax.plugin.BasePlugin":{process_event:[7,1,1,""],shutdown:[7,1,1,""],startup:[7,1,1,""]},"pax.plugin.InputPlugin":{get_events:[7,1,1,""],get_single_event:[7,1,1,""],number_of_events:[7,3,1,""],process_event:[7,1,1,""]},"pax.plugin.OutputPlugin":{process_event:[7,1,1,""],write_event:[7,1,1,""]},"pax.plugin.TransformPlugin":{process_event:[7,1,1,""],transform_event:[7,1,1,""]},"pax.plugins":{corrections:[9,0,0,"-"],for_tests:[10,0,0,"-"],io:[11,0,0,"-"],posrec:[12,0,0,"-"],signal_processing:[13,0,0,"-"]},"pax.plugins.corrections":{ExampleCorrection:[9,0,0,"-"]},"pax.plugins.corrections.ExampleCorrection":{ExampleCorrection:[9,4,1,""]},"pax.plugins.corrections.ExampleCorrection.ExampleCorrection":{startup:[9,1,1,""],transform_event:[9,1,1,""]},"pax.plugins.for_tests":{Dummy:[10,0,0,"-"]},"pax.plugins.for_tests.Dummy":{DummyInput:[10,4,1,""],DummyOutput:[10,4,1,""],DummyTransform2:[10,4,1,""],DummyTransform3:[10,4,1,""],DummyTransform:[10,4,1,""]},"pax.plugins.for_tests.Dummy.DummyInput":{get_events:[10,1,1,""]},"pax.plugins.for_tests.Dummy.DummyOutput":{write_event:[10,1,1,""]},"pax.plugins.io":{Avro:[11,0,0,"-"],BSON:[11,0,0,"-"],BulkOutput:[11,0,0,"-"],FolderIO:[11,0,0,"-"],MongoDB:[11,0,0,"-"],Pickle:[11,0,0,"-"],RawWaveformDump:[11,0,0,"-"],WaveformSimulator:[11,0,0,"-"],XED:[11,0,0,"-"]},"pax.plugins.io.Avro":{ReadAvro:[11,4,1,""],WriteAvro:[11,4,1,""]},"pax.plugins.io.Avro.ReadAvro":{close:[11,1,1,""],file_extension:[11,3,1,""],get_all_events_in_current_file:[11,1,1,""],open:[11,1,1,""]},"pax.plugins.io.Avro.WriteAvro":{close:[11,1,1,""],file_extension:[11,3,1,""],open:[11,1,1,""],startup:[11,1,1,""],write_event_to_current_file:[11,1,1,""]},"pax.plugins.io.BSON":{ReadBSON:[11,4,1,""],ReadJSON:[11,4,1,""],ReadZippedBSON:[11,4,1,""],WriteBSON:[11,4,1,""],WriteJSON:[11,4,1,""],WriteZippedBSON:[11,4,1,""]},"pax.plugins.io.BSON.ReadBSON":{close:[11,1,1,""],file_extension:[11,3,1,""],get_all_events_in_current_file:[11,1,1,""],open:[11,1,1,""]},"pax.plugins.io.BSON.ReadJSON":{close:[11,1,1,""],file_extension:[11,3,1,""],get_all_events_in_current_file:[11,1,1,""],open:[11,1,1,""]},"pax.plugins.io.BSON.ReadZippedBSON":{close:[11,1,1,""],file_extension:[11,3,1,""],get_single_event_in_current_file:[11,1,1,""],open:[11,1,1,""]},"pax.plugins.io.BSON.WriteBSON":{close:[11,1,1,""],file_extension:[11,3,1,""],open:[11,1,1,""],write_event_to_current_file:[11,1,1,""]},"pax.plugins.io.BSON.WriteJSON":{close:[11,1,1,""],file_extension:[11,3,1,""],open:[11,1,1,""],write_event_to_current_file:[11,1,1,""]},"pax.plugins.io.BSON.WriteZippedBSON":{close:[11,1,1,""],file_extension:[11,3,1,""],open:[11,1,1,""],write_event_to_current_file:[11,1,1,""]},"pax.plugins.io.BulkOutput":{BulkOutput:[11,4,1,""],ReadFromBulkOutput:[11,4,1,""]},"pax.plugins.io.BulkOutput.BulkOutput":{get_index_of:[11,1,1,""],shutdown:[11,1,1,""],startup:[11,1,1,""],write_event:[11,1,1,""]},"pax.plugins.io.BulkOutput.ReadFromBulkOutput":{convert_record:[11,1,1,""],get_events:[11,1,1,""],startup:[11,1,1,""]},"pax.plugins.io.FolderIO":{InputFromFolder:[11,4,1,""],WriteToFolder:[11,4,1,""]},"pax.plugins.io.FolderIO.InputFromFolder":{close:[11,1,1,""],file_extension:[11,3,1,""],get_all_events_in_current_file:[11,1,1,""],get_events:[11,1,1,""],get_first_and_last_event_number:[11,1,1,""],get_single_event:[11,1,1,""],get_single_event_in_current_file:[11,1,1,""],init_file:[11,1,1,""],open:[11,1,1,""],select_file:[11,1,1,""],shutdown:[11,1,1,""],startup:[11,1,1,""]},"pax.plugins.io.FolderIO.WriteToFolder":{close:[11,1,1,""],close_current_file:[11,1,1,""],file_extension:[11,3,1,""],open:[11,1,1,""],open_new_file:[11,1,1,""],shutdown:[11,1,1,""],startup:[11,1,1,""],write_event:[11,1,1,""],write_event_to_current_file:[11,1,1,""]},"pax.plugins.io.MongoDB":{MongoDBFakeDAQOutput:[11,4,1,""],MongoDBInput:[11,4,1,""],MongoDBInputTriggered:[11,4,1,""]},"pax.plugins.io.MongoDB.MongoDBFakeDAQOutput":{chunks:[11,7,1,""],get_connection:[11,1,1,""],handle_occurences:[11,1,1,""],shutdown:[11,1,1,""],startup:[11,1,1,""],write_event:[11,1,1,""]},"pax.plugins.io.MongoDB.MongoDBInput":{get_events:[11,1,1,""],number_events:[11,1,1,""],startup:[11,1,1,""]},"pax.plugins.io.MongoDB.MongoDBInputTriggered":{get_events:[11,1,1,""],startup:[11,1,1,""],total_number_events:[11,1,1,""]},"pax.plugins.io.Pickle":{DirWithPickleFiles:[11,4,1,""],ReadFromStackedPickleFolder:[11,4,1,""],WriteToPickleFile:[11,4,1,""],WriteToStackedPickleFolder:[11,4,1,""]},"pax.plugins.io.Pickle.DirWithPickleFiles":{get_events:[11,1,1,""],get_single_event:[11,1,1,""],startup:[11,1,1,""]},"pax.plugins.io.Pickle.ReadFromStackedPickleFolder":{close:[11,1,1,""],file_extension:[11,3,1,""],get_all_events_in_current_file:[11,1,1,""],open:[11,1,1,""]},"pax.plugins.io.Pickle.WriteToPickleFile":{write_event:[11,1,1,""]},"pax.plugins.io.Pickle.WriteToStackedPickleFolder":{close:[11,1,1,""],file_extension:[11,3,1,""],open:[11,1,1,""],write_event_to_current_file:[11,1,1,""]},"pax.plugins.io.RawWaveformDump":{DumpSumWaveformToBinary:[11,4,1,""],WaveformDumperBase:[11,4,1,""]},"pax.plugins.io.RawWaveformDump.DumpSumWaveformToBinary":{get_waveform_to_dump:[11,1,1,""]},"pax.plugins.io.RawWaveformDump.WaveformDumperBase":{get_waveform_to_dump:[11,1,1,""],startup:[11,1,1,""],write_event:[11,1,1,""]},"pax.plugins.io.WaveformSimulator":{WaveformSimulator:[11,4,1,""],WaveformSimulatorFromCSV:[11,4,1,""],WaveformSimulatorFromNEST:[11,4,1,""]},"pax.plugins.io.WaveformSimulator.WaveformSimulator":{get_events:[11,1,1,""],get_instructions_for_next_event:[11,1,1,""],s1:[11,1,1,""],s2:[11,1,1,""],shutdown:[11,1,1,""],simulate_single_event:[11,1,1,""],startup:[11,1,1,""],store_true_peak:[11,1,1,""]},"pax.plugins.io.WaveformSimulator.WaveformSimulatorFromCSV":{get_instructions_for_next_event:[11,1,1,""],shutdown:[11,1,1,""],startup:[11,1,1,""]},"pax.plugins.io.WaveformSimulator.WaveformSimulatorFromNEST":{get_instructions_for_next_event:[11,1,1,""],startup:[11,1,1,""],variables:[11,3,1,""]},"pax.plugins.io.XED":{XedInput:[11,4,1,""]},"pax.plugins.io.XED.XedInput":{close:[11,1,1,""],file_extension:[11,3,1,""],get_first_and_last_event_number:[11,1,1,""],get_single_event_in_current_file:[11,1,1,""],open:[11,1,1,""]},"pax.plugins.posrec":{NeuralNet:[12,0,0,"-"],PosRecChiSquareGamma:[12,0,0,"-"],PosSimple:[12,0,0,"-"]},"pax.plugins.posrec.NeuralNet":{NeuralNet:[12,4,1,""],PosRecNeuralNet:[12,4,1,""]},"pax.plugins.posrec.NeuralNet.NeuralNet":{run:[12,1,1,""],run_layer:[12,1,1,""]},"pax.plugins.posrec.NeuralNet.PosRecNeuralNet":{startup:[12,1,1,""],transform_event:[12,1,1,""]},"pax.plugins.posrec.PosRecChiSquareGamma":{PosRecChiSquareGamma:[12,4,1,""]},"pax.plugins.posrec.PosRecChiSquareGamma.PosRecChiSquareGamma":{function_chi_square_gamma:[12,1,1,""],shutdown:[12,1,1,""],startup:[12,1,1,""],transform_event:[12,1,1,""]},"pax.plugins.posrec.PosSimple":{PosRecWeightedSum:[12,4,1,""]},"pax.plugins.posrec.PosSimple.PosRecWeightedSum":{startup:[12,1,1,""],transform_event:[12,1,1,""]},"pax.plugins.signal_processing":{CheckPulses:[13,0,0,"-"],Cluster:[13,0,0,"-"],HitFinder:[13,0,0,"-"]},"pax.plugins.signal_processing.CheckPulses":{CheckBounds:[13,4,1,""],ConcatenateAdjacentPulses:[13,4,1,""],SortPulses:[13,4,1,""]},"pax.plugins.signal_processing.CheckPulses.CheckBounds":{startup:[13,1,1,""],transform_event:[13,1,1,""]},"pax.plugins.signal_processing.CheckPulses.ConcatenateAdjacentPulses":{transform_event:[13,1,1,""]},"pax.plugins.signal_processing.CheckPulses.SortPulses":{transform_event:[13,1,1,""]},"pax.plugins.signal_processing.Cluster":{ClusterPlugin:[13,4,1,""],GapSize:[13,4,1,""],HitDifference:[13,4,1,""],MeanShift:[13,4,1,""]},"pax.plugins.signal_processing.Cluster.ClusterPlugin":{cluster_hits:[13,1,1,""],startup:[13,1,1,""],transform_event:[13,1,1,""]},"pax.plugins.signal_processing.Cluster.GapSize":{cluster_hits:[13,1,1,""],startup:[13,1,1,""]},"pax.plugins.signal_processing.Cluster.HitDifference":{cluster_hits:[13,1,1,""]},"pax.plugins.signal_processing.Cluster.MeanShift":{cluster_hits:[13,1,1,""],get_gap_probability:[13,7,1,""],get_gap_size:[13,1,1,""],startup:[13,1,1,""]},"pax.plugins.signal_processing.HitFinder":{FindHits:[13,4,1,""],compute_hit_properties:[13,3,1,""],compute_pulse_properties:[13,3,1,""],find_intervals_above_threshold:[13,3,1,""]},"pax.plugins.signal_processing.HitFinder.FindHits":{startup:[13,1,1,""],transform_event:[13,1,1,""]},"pax.simulation":{SimulatedHitpattern:[7,4,1,""],Simulator:[7,4,1,""],truncated_gauss_rvs:[7,5,1,""]},"pax.simulation.Simulator":{get_luminescence_times:[7,1,1,""],make_hitpattern:[7,1,1,""],pmt_pulse_current:[7,1,1,""],s1_photons:[7,1,1,""],s2_electrons:[7,1,1,""],s2_scintillation:[7,1,1,""],singlet_triplet_delays:[7,1,1,""],to_pax_event:[7,1,1,""]},"pax.units":{unit_name:[7,5,1,""]},"pax.utils":{InterpolatingMap:[7,4,1,""],Memoize:[7,4,1,""],chunk_in_ntuples:[7,5,1,""],cluster_by_diff:[7,5,1,""],data_file_name:[7,5,1,""],get_named_configuration_options:[7,5,1,""],mad:[7,5,1,""],weighted_mean_variance:[7,5,1,""]},"pax.utils.InterpolatingMap":{data_field_names:[7,3,1,""],get_value:[7,1,1,""],get_value_at:[7,1,1,""],plot:[7,1,1,""]},pax:{core:[7,0,0,"-"],data_model:[7,0,0,"-"],datastructure:[7,0,0,"-"],exceptions:[7,0,0,"-"],formats:[7,0,0,"-"],plugin:[7,0,0,"-"],plugins:[8,0,0,"-"],simulation:[7,0,0,"-"],units:[7,0,0,"-"],utils:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","exception","Python exception"],"3":["py","attribute","Python attribute"],"4":["py","class","Python class"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"],"7":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:method","2":"py:exception","3":"py:attribute","4":"py:class","5":"py:function","6":"py:classmethod","7":"py:staticmethod"},terms:{"1dytkbmmarsztuyumlbzm9ibxm1hr":11,"2to3":16,"3d_pl":18,"3d_plotter":18,"__1":16,"__dict__":16,"__import__":16,"__pycache__":7,"__version__":2,"_base":18,"_importhook":16,"_intern":7,"break":7,"case":[14,16],"class":[3,4,5,7,9,10,11,12,13],"default":[3,4,7,11,14,17],"export":[2,17],"final":11,"float":[3,7],"function":[1,4,7,11,12,13,14,15,16],"import":[2,4,7,16],"int":[3,7,13],"long":11,"new":[1,3,4,7,11,13,15],"return":[3,7,11,12,13,14,16],"static":[4,7,11,13],"super":17,"switch":[4,17],"true":[2,3,7,11,15,17],"try":[2,7,11,13,16,17],"while":14,aalber:0,abbrevi:7,abl:[2,7,17],about:[1,2,3,7,11,13],abov:[2,7,13,16,17],absolut:[7,11],access:[7,11,17],account:13,accuraci:15,action:7,activ:[12,16],adc:[3,4,7,13],add:[1,2,3,7],addit:[7,14],addition:12,address:2,adjac:13,advanc:18,advis:14,after:[2,4,11,13,14,16,18],again:2,agreement:4,aim:11,alex:12,algorithm:[3,4,7,12,13,15],all:[3,4,7,11,12,14],all_hit:[3,7],allow:[4,11,13,17],alon:15,along:4,alper:0,alreadi:[1,13,15],also:[3,4,7,11,14,15,16,17],altern:[16,17],alwai:[1,2,3,4,7,11,14],among:16,amount:3,amplitud:[3,7],anaconda3:[2,17],anaconda:[1,2,17],analys:16,ani:[1,3,7,11,13,14,17],annot:17,anoth:[1,15],another_map_nam:7,anyth:[1,11,13],apach:11,apache_avro:11,apart:7,api:11,append:[7,11,12,15],append_data:11,applic:[2,7],appreci:1,appropri:11,apt:16,aquisit:11,arbitrari:4,arcan:7,archiv:17,area:[3,7,13],area_fraction_top:[3,7],area_per_channel:[3,7],arg:[7,11],argmax:13,argument:[3,4,7,17,18],around:4,arrai:[3,7,11,12,13,15],arriv:[7,11],ascend:[3,7],ask:1,assum:[11,13,16,17],assumpt:15,atanh:12,attribut:7,author:1,automat:[2,13,14,17],avail:[3,11,14,18],averag:12,avro:[4,7,8],axi:7,back:7,backbon:7,backend:[4,7],backward:16,bad:4,bandpass:4,bare:3,bart:0,bartp:[0,2],base:[4,7,9,10,11,12,13,14,15,17],base_unit:7,baselin:[7,13],baselineexcursionmethod:4,baseplugin:7,bash:17,bashrc:2,basic:[4,13],becaus:[2,3,7,11],becom:7,been:18,befor:1,behaviour:[4,16],belong:[3,7],below:[7,13],bern:[4,18],best:1,better:[2,4,7,16],between:[3,4,7,11,13],beyond:13,bia:12,bias:12,bin:[2,3,7,14,16,17,18],binari:4,bind:4,binutil:16,bit:[1,3,7],blahblah:13,block:4,bool:[3,7],both:[3,15],bottom:[3,4,7,15,17],bottom_hitpattern_spread:[3,7],bound:[3,7,13],boundari:[7,13],branch:[1,7],breur:0,browser:17,bsd:17,bson:[4,7,8],buffer_s:11,bugfix:[1,4],build:[4,7,11,16],builder:11,builtin:16,bulk:[4,7],bulkoutput:[7,8],bulkoutputformat:[7,11],bunch:11,bypass:16,bzip2:11,calcul:[12,15],call:[3,7,11,15,16],can:1,cannot:[2,7,17],capabl:4,care:7,cartesian:7,caus:[7,16],center:[3,7,13],centermost:[3,7],centroid:12,cern:16,certif:2,cflag:[2,17],chain:[4,11,15],chang:[1,4,7,11,16,18],channel:[3,4,7,13],channel_list:[3,7],channel_waveform:11,channels_to_use_for_reconstruct:15,charact:14,charg:[4,12],check:[1,2,3,7,11,13,15,16],checkbound:13,checkout:1,checkpuls:[7,8],chi:[4,12],chi_square_gamma:12,child:11,chose:1,christoph:[0,2],chunk:[7,11],chunk_in_ntupl:7,chunk_siz:7,class_nam:14,class_to_load_to:11,classif:[4,11],classmethod:[3,7],clean:4,clean_shutdown:7,cleanli:14,cleanup:[4,16],clearli:14,click:2,clock:[3,7],clone:[1,2],close:[7,11,14],close_current_fil:11,cluster:[3,4,7,8,11],cluster_by_diff:7,cluster_hit:13,clusterplugin:13,code1:7,code:[4,7,11,14,16,17],coderr:0,coincid:[3,7],collect:11,column:11,com:[1,2,7,11,17],come:11,command:[2,4,16,17],comment:[4,7,13,14,16,18],commit:[1,4],common:11,commonli:[3,7],comparison:4,compat:16,compil:[2,16,17],complain:2,complet:4,compress:[11,17],comput:[3,4,7,11,13],compute_hit_properti:13,compute_pulse_properti:13,concaten:[11,13],concatenateadjacentpuls:13,conda:[2,17],config:[3,7,13,14,16,18],config_dict:7,config_nam:7,config_path:[7,17,18],config_str:7,config_to_init:7,config_valu:[7,9,10,11,12,13],configur:[3,4,7,11,14,15,16,17,18],connect:12,consist:7,constant:14,construct:15,constructor:[3,7,14],consult:11,contain:[3,4,7,11,13,14,15,16],content:[5,6],continu:4,continuum:17,contributing_channel:[3,7],control:[4,11],convert:[3,4,7,11,13,16],convert_numpy_arrays_to:7,convert_record:11,convolut:4,coordin:7,coordinate_system:7,copi:[1,2,14,16],core:[4,6],correct:[4,7,8],correctli:16,correspond:11,cosin:[4,17],could:[1,3,7,16,17],count:[3,7,13,15],cout:16,cover:13,coverag:4,coveral:4,creat:[1,3,4,5,7,11],creation:7,csv:7,ctunnel:0,culpa:4,currenli:15,current:[3,4,11,15],custom:14,cut:4,cylindr:7,cython:17,daniel:0,daq:[4,7,11,17],daq_injector:18,daqinjector:4,daqread:11,darkmatt:12,data:[2,3,4,7,11,13,14,15,16,17,18],data_field_nam:7,data_file_nam:7,data_model:[3,6],data_types_pres:7,databas:[4,11,14,18],datafram:4,dataset:[4,11],dataset_nam:[3,7],datastructur:[3,4,6],datatak:11,datatyp:7,date:1,deactiv:16,dead:4,deal:[15,16],debug:[4,13,18],decai:7,decid:13,declar:7,decor:13,def:16,defin:[4,7,11,14],definit:[4,7,16],degre:15,delet:7,demo:4,depend:[2,3,4,7,13,14,16,17],deposit:7,deprec:[3,7,11],depth:[7,11],deriv:14,descend:[3,7],describ:[7,14,15],descript:[1,7,14,18],deseri:[3,7],desktop:16,destruct:4,destructor:14,detail:[1,11,12],detector:[3,4,7],determin:[4,7,11,12],dev:[16,17],deviat:[3,7],df_name:7,diagnost:7,dict:7,dictionari:[4,7,14],diff_threshold:7,differ:[4,13,14],difficult:11,digit:[3,4,7,11,17],dir:7,directli:13,directori:[4,7,11,14,15,16,17,18],dirwithpicklefil:11,disabl:16,disk:[11,17],displai:17,distribut:[12,15,17],divis:7,dll:16,dname:11,doc:[1,4,7,11],docstr:[1,7],doe:[3,7,11,13,14],does_channel_contribut:[3,7],does_channel_have_nois:[3,7],don:[7,13],done:[1,2,7,15],down:[4,7,16],download:16,dpkg:16,draw:11,drift:7,driven:1,drupal:16,dsp:4,dtype:[3,7],due:[4,11],dummi:[7,8],dummyinput:10,dummyoutput:10,dummytransform2:10,dummytransform3:10,dummytransform:10,dump:[7,11],dumpsumwaveformtobinari:11,durat:[3,7],each:[3,4,7,11,12,14,15],earliest:[3,7],eas:[3,7,17],easier:[1,17],easili:4,easy_instal:2,echo:16,edg:[3,4,7],edit:[7,11],effici:4,either:[13,15,16,17],electron:[7,11],electron_arrival_tim:7,electron_tim:11,electrons_gener:7,element_typ:7,elr:7,els:[7,11],email:[2,17],empti:[3,4,7],empty_ev:[3,7],emul:[4,11],enabl:[4,13,16],encod:[4,11],end:[4,7,11,16],energi:7,enforc:7,enhanc:4,ensur:[7,13],enter:2,entir:[4,11],entiti:11,env:16,environ:[1,2,16],epoch:7,error:[11,13,16],etc:[7,11,14],evalu:7,even:[1,7],evenli:7,event_numb:[3,7],event_posit:11,eventu:11,ever:11,everi:[1,7,11,14,16],everyth:[2,7],exactli:2,exampl:[3,4,7,11,15,16,17],examplecorrect:[7,8],exce:13,except:[4,6],excim:7,execut:2,exim:7,exist:[1,7,11,12,15],exit:[16,18],expect:2,experi:[2,11,17],explain:[1,3,7],explor:[1,17],extend:[4,7,13],extens:[1,4,11],extern:4,extra:[4,11],extra_path:7,fact:2,fail:2,fallback_configur:7,fals:[3,7,17],faq:17,fast:11,faster:4,favorit:7,favourit:2,fax:[4,7,11],feed:[11,12],feel:[1,2],few:7,fiction:2,field:[4,7,11,14],fields_to_ignor:[7,11],file:[1,2,4,7,11,14,15,16,17,18],file_extens:[7,11],filenam:[7,11],fill:[3,7,13],fillvalu:7,filter:[3,4,7,17],find:[4,7,11,12,13,15,17],find_intervals_above_threshold:13,findbigpeak:4,finder:4,findhit:13,fine:11,finish:11,first:[3,4,5,7,11,16],first_ev:11,first_event_numb:11,fit:[3,7,12,15],flag:[3,7],flake8:1,flat:11,float32:7,float64:[3,7],folder:[4,11],folderio:[7,8],follow:[2,3,7,11,14,15,16,17],food:7,for_test:[7,8],forget:13,fork:[1,4],form:15,format:2,forward:12,found:[3,7,11,13,14,16],found_in_puls:[3,7],four:16,foward:12,fraction:[3,7],framework:[4,7,11],free:[1,2,17],freedom:15,frequenc:4,from:[2,3,4,7,11,12,13,14,16,17,18],from_bson:7,from_json:7,full:15,fulli:11,fun:4,function_chi_square_gamma:12,further:4,gain:[7,12],gamma:[4,12],gap:13,gap_width:13,gapsiz:[4,13],gate:7,gauss:7,gcc:[2,16],gener:[3,4,7,11,15],generate_mock_correction_map:7,get_all_events_in_current_fil:11,get_connect:11,get_data_field:7,get_ev:[7,10,11,14],get_fields_data:7,get_first_and_last_event_numb:11,get_gap_prob:13,get_gap_s:13,get_index_of:11,get_instructions_for_next_ev:11,get_list_field_info:7,get_luminescence_tim:7,get_metadata:7,get_named_configuration_opt:7,get_plugin_by_nam:7,get_plugin_search_path:7,get_single_ev:[7,11],get_single_event_in_current_fil:11,get_sum_waveform:[3,7],get_sum_waveform_nam:[3,7],get_valu:7,get_value_at:7,get_waveform_to_dump:11,getattr:16,git:1,git_ssl_no_verifi:2,github:[1,2,12,17],give:[7,11],given:[1,3,7],glob:7,global:15,gnu:16,goat:2,gohlk:2,good:[3,7,12,15,16],goodness_of_fit:[3,7],googl:11,googlecod:17,graviti:[3,7,13],greatli:1,grid:7,group:[4,12,13],groupbaudi:12,guess:2,guid:14,guillaum:11,gzip:[11,16],h5py:17,hack:7,hadoop:11,handi:17,handl:[4,11],handle_occur:11,happi:16,hard:14,hasattr:16,hater:2,have:[2,3,4,7,11,14,16,17,18],hdf5:[4,7],hdf5dump:7,head:7,hear:11,height:[3,7],help:[1,4,17,18],helper:7,henc:11,here:[1,3,7,11,17],hidden:12,high:[3,4,7],high_threshold:13,higher:[4,11],highest:[3,7],hint:17,hit:[3,4,7,11,12,13,15,17],hit_time_mean:[3,7],hit_time_std:[3,7],hitdiffer:13,hitfind:[4,7,8],hitlist:7,hitpattern:[3,7],hoc:16,hold:[3,7],home:[2,16,17],hostnam:11,how:1,howev:[11,17],html:[7,12],http:[1,2,7,11,12,13,16,17],idem:7,ident:[4,12],ignor:2,important_modul:2,imprecis:[3,7],improv:4,impuls:4,inc:16,incdir:16,includ:[1,2,3,4,7,14,15,16,17],inclus:[3,7,13],index:[3,4,5,7,11,13],index_of_maximum:[3,7],individu:[3,7,11,13],info:17,inform:[3,7,11,12,15,17],inherit:4,ini:[4,14,15,17,18],init:7,init_fil:11,initi:[7,12,14],initial_baseline_sampl:13,initializi:7,inject:[4,11],injector:4,input:[3,4,7,11,12],input_valu:12,inputfromfold:11,inputplugin:[7,10,11,14],insist:2,instal:[1,2,4,5,7],instanc:[3,7,11],instantiate_plugin:7,instruct:[2,4,11,17],int16:7,int32:7,int64:[3,7],integ:[3,7],integr:[3,4,7,11],intend:11,interact:[7,11,15,16,17],interfac:[4,7,11],intermedi:14,intern:11,interpol:[4,7],interpolatingmap:7,interpret:4,interv:13,intput:14,intro:5,invers:13,ioniz:[3,7],is_channel_suspici:[3,7],is_filt:[3,7],is_reject:[3,7],isn:[7,17],isol:4,issu:[1,2,4],iter:[7,11],ith:11,jaalber:0,januari:[3,7],jell:0,jit:13,json:[7,11],just:[1,2,3,4,17],just_test:7,kaminski:2,keep:1,kei:[3,7],kept:11,kind:11,kish:12,kish_thesiselectron:12,knkeiu4x3ot8u:11,know:[2,17],kodiaq:11,kwarg:[3,7],kwargs_dict:[3,7],label:13,laptop:16,larg:11,largest:4,last:[3,7,10,11,13,16],last_ev:[10,11],later:[3,4,7,13],latest:16,launch:4,layer:[12,17],lce:[12,15],lce_map_fil:15,lce_map_file_nam:15,ldflag:[2,17],leak:4,learn:17,least:[3,7],leav:15,left:[3,7,13],left_boundari:7,leftmostleft:[3,7],length:[3,4,7,11,13],let:[2,17],level:[3,4,7,11,13,18],lexic:7,lhep:0,lib:[2,16,17],libdir:16,libpyroot:16,libpython3:16,libpython:16,librari:[7,11,16,17],libsnappi:17,libx11:16,libxdio:11,libxext:16,libxft:16,libxpm:16,licens:17,lifetim:7,like:[2,4,14,17],line:[2,4,16,17],linearli:7,lint:1,linux:[16,17],linux_setup:2,list:[1,3,7,11,14,15,16,17],listfield:[3,7],littl:1,load:[4,7,12,17],load_configur:7,local:[1,2],locat:[7,14,16,17],log:[4,7,18],log_scale_entire_ev:17,logger:[4,7],login:2,lone_puls:13,longer:[11,13],look:[1,2,16,17],lost:1,lot:4,low:15,low_threshold:13,lowest:12,macport:2,mad:7,made:7,mai:[1,2,7,11],major:[4,7,16],make:[1,2,3,7,14,16,17,18],make_hitpattern:7,manag:17,mani:[1,4],manipul:7,manual:16,map:[4,7,12,15],map_nam:7,mask:4,match:[3,4,7],matplotlib:17,matrix:7,matur:4,max:[4,13],max_differ:13,max_gap_s:13,maxima:13,maximum:[3,7,11,13],mea:4,mean:[3,4,7,11,13,15],mean_amplitude_to_nois:[3,7],mean_shift:13,meaning:7,meaningless:4,meanshift:[4,13],meant:7,meantim:2,median:7,meet:1,member:14,memoiz:7,memori:[4,11],mention:2,merg:4,mesh:7,mess:7,messag:18,metadata:11,method:[4,7,13,14,15],micromodel:4,middl:[11,13],might:1,min:13,min_width:4,minim:12,minimum:[7,12,15],minor:[4,7,16],miss:[2,4],mkdir:16,mname:11,mode:[2,4,7,15],model:7,modif:[14,16],modifi:[4,7,13,14,15,17],modified_root_v5:16,modified_root_v6:16,modul:[2,4,5,6],moment:11,mongo:[4,11,18],mongodb:[4,7,8],mongodbfakedaqoutput:11,mongodbinput:11,mongodbinputtrigg:11,more:[1,2,4,7,11,13,17,18],most:[2,4,14,15,17],motiv:4,move:4,much:[2,4],multi:16,multipl:4,music:4,must:[3,4,7,11,14,17],mutil:4,my_fil:17,my_mean:7,my_postprocess:14,my_std:7,mynewclassthatdoessomethingtransform:14,n_channel:[3,7],n_contributing_channel:[3,7],n_hidden:12,n_hits_reject:[3,7],n_in_data:7,n_input:12,n_noise_channel:[3,7],n_output:12,n_photon:7,n_rv:7,n_x:7,nag:2,name:[1,3,7,11,14,15,18],name_of_filt:[3,7],nan:7,nanosecond:[3,7],narrow:1,nativ:13,natur:13,navig:17,ndarrai:7,ndf:[3,7,12,15],nearli:[4,14],need:[1,2,3,7,11,14,15,16],neg:[4,7],nest:[4,7],nest_i:11,nest_nel:11,nest_nph:11,nest_nr:11,nest_t:11,nest_x:11,nest_z:11,net:[4,12,17],network:12,neural:[4,12,17],neuralnet:[7,8],neuron:12,newdsp:[4,18],newlin:11,next:[13,17],nice:[2,7,17],nikhef:0,no_reconstruct:15,nois:[3,4,7,13],noise_channel:[3,7],noise_pulses_in:[3,7],noise_sigma:[3,7,13],none:[3,7,11],nonneg:7,nonstandard:17,note:[3,7,11,16],noth:13,notifi:11,now:[1,2,4,16,17],npz:7,nth:11,nuclear:11,numba:[4,13,17],number:[3,7,11,13,15,16],number_ev:11,number_of_ev:7,numer:[4,14],numpi:[7,11,12,13,17],numpy_typ:7,numpydump:7,object:[3,7,12,14,15],occur:[4,7,11],off:[3,4,7],offer:2,offici:1,offset:[7,11],often:17,old:[2,4,11],older:17,onc:[7,11,17],onli:[2,3,7,11,14,15],onlin:[4,17],only_reconstruct:15,open:[1,4,7,11,14],open_new_fil:11,oper:1,opportun:4,opt:2,optim:[11,15],option:[5,11],order:[7,14,15],ordinari:[3,7],org:[7,11,13],origin:[1,7,15],other:[1,2,4,7,11,12,14,15,17],otherwis:[3,7,13],otter:18,our:[4,7,11,17],out:[4,7,11,16],output:[2,4,7,11,12],output_dir:17,output_format:11,output_nam:11,outputfilealreadyexistserror:7,outputplugin:[7,10,11,14],over:[7,11],overhang:4,overhead:11,overload:14,overrid:[4,7,14],overwrit:11,overwrite_data:11,own:[3,14,17,18],p_value_offset:13,packag:6,pad:7,page:[2,5],panda:[4,17],pandas_format_kei:7,pandascsv:7,pandasformat:7,pandashdf5:7,pandashtml:7,pandasjson:7,parallel:[4,7],param:[7,13],paramet:[3,7,11,12,15],parent_configur:17,pars:4,part:[1,16],particl:[3,7],particular:[11,18],pass:[1,3,7,12],past:4,patch:7,path:[2,7,14,17,18],pattern:[4,12,15,17],pax:1,pax_dir:7,pax_info:11,paxer:[2,17,18],paxit:[4,14],pdf:12,peak:[3,4,7,11,12,13,15,17],peak_typ:11,peakfind:4,pelsser:0,peopl:[2,7,17],per:[3,7,11],perform:[4,14],permiss:17,phd:11,phi:[3,7],photoelectron:[3,7],photon:[4,7,11],photon_tim:[7,11],physic:[3,7,11],physik:12,pickl:[4,7,8],pickler:4,pip:[1,2,16,17],place:7,plai:17,plane:15,plant:11,pleas:[1,2,7,14,17],plot:[2,4,7,17,18],plot_to_dir:18,plotchannelwaveforms3d:17,ploteventsummari:17,plug:11,plugin:[3,4,5,6],plugin_path:[7,14],pmt:[3,7,11,12,15,17],pmt_pulse_curr:7,point:[2,3,7,11,16,17],poisson:15,polish:4,port:4,posit:[3,4,7,11,12,14],posrec:[7,8],posrecchi:15,posrecchisquaregamma:[3,7,8],posrecneuralnet:12,posrecweightedsum:[12,15],possibl:[1,13,15],possimpl:[4,7,8],powel:15,practis:16,pre:16,prefers_python_str:7,prefix:17,prerequisit:16,present:11,previou:[4,12],print:[2,16],privat:17,probabl:[13,14],problem:2,procedur:11,process:[3,4,7,11,14,15,16,17,18],process_ev:7,processor:4,produc:[11,17],product:7,program:[16,17],project:[1,4,11],promis:7,proper:[7,14,16],properti:[4,7,11,13],propos:1,provid:[3,7,15,16],puls:[3,4,7,11,13],pulsebeyondeventerror:7,pure:13,purpos:[3,7],push:1,put:[1,7,16],py34:16,py3:[4,16],pymongo3:4,pyroot:2,pytabl:17,python2:7,python3:[2,7,16],python:[1,2,3,4,7,13,16,17],pythondir:16,quick:7,quickli:13,quit:13,rais:[4,11,13,17],random:11,rang:[3,7],range_50p_area:[3,7],range_90p_area:[3,7],rather:[3,7,16],ratio:7,raw:[3,4,7,11,13,17],raw_data:7,raw_data_fil:11,raw_hit:13,rawwaveformdump:[7,8],reach:7,reactiv:17,read:[4,7,11,18],read_data:7,readavro:11,readbson:11,readfrombulkoutput:11,readfromstackedpicklefold:11,readi:[1,16],readjson:11,readm:1,readzippedbson:11,realli:7,reason:[3,7],reboot:2,recalcul:13,receiv:11,recoil:11,recoil_typ:[7,11],recommend:17,reconstruct:[3,4,7,12],reconstructed_posit:[3,7],reconstructedposit:[3,4,7,11,12,15],record:[3,7,11],recurs:7,redefin:14,redo:11,refactor:4,refer:[3,7],region:[4,7,13],regular:7,reject:[3,4,7],rel:[7,13],relat:[2,4,7],releas:[4,7],relev:17,rememb:1,remot:11,remov:4,renam:11,reorgan:4,repeat:4,repect:14,replac:11,repo:17,repositori:17,reprocess:[4,11],reproduc:1,requir:[2,3,4,5,14,16],respect:[7,16],respons:[4,7,11],rest:11,restart:11,restrict:7,result:[2,3,7,13],result_buff:13,return_indic:7,revers:[3,7],right:[3,7,13],right_boundari:7,rightmost:[3,7],rightmostright:[3,7],root_:16,root_typ:7,rootdump:7,round:[3,7],routin:[7,11],rst:1,run:1,run_14:17,run_lay:12,runtim:11,s1_default_recombination_tim:11,s1_photon:[7,11],s2_electron:[7,11],s2_scintil:7,s2_size:13,s2_width:13,sacrific:2,sad:2,safe:7,sai:7,said:2,same:[3,7,11,13],sampl:[3,7,11,13],sample_dur:[3,7],sander:0,sanderb:0,save:[3,11,14,18],scalar:7,scale:11,scheme:11,scientif:17,scikit:17,scintil:[3,7],scipi:[7,15,17],scope:1,screen:18,script:[2,4,14],search:[5,7,11,13,14,16],second:7,secondli:12,section:[7,14,17],secur:2,see:[2,3,4,7,11,12,15,17,18],seen:4,select:11,select_fil:11,self:[10,11,14,16],send:1,separ:[4,11,13,17],sequenti:11,serial:[7,11],server:4,set:1,setup:[1,2,4,11,17],setup_log:7,sever:[2,4,7,11,17],shape:7,shard:4,shell:2,shift:13,ship:[3,7],should:[1,2,4,7,13,14,16,17],shouldn:2,show:[2,3,7,16,18],shut:[4,7,16],shutdown:[7,11,12,14],side:4,sigma:[3,7],signal:[3,4,7,12,15,17],signal_process:[7,8],signific:[3,7],simpl:12,simpledsp:4,simplifi:4,simul:[4,6],simulate_single_ev:11,simulatedhitpattern:7,sinc:[3,4,7,15,16],singl:[4,7,11,12],singlet:7,singlet_ratio:7,singlet_triplet_delai:7,site:7,size:[7,11],skeleton:7,slow:[11,13],small:[4,11],softwar:[2,4,17],solut:16,solv:[4,17],some:[2,4,7,11,13,16,17],some_field:7,someth:[3,7,17],sometyp:7,somewher:[11,13],sophist:17,sort:[3,7,13],sort_kei:[3,7],sortpuls:13,sourc:[2,3,4,7,9,10,11,12,13,14,16,17],space:7,spe:13,special:16,specif:[1,5,7],specifi:[3,4,7,11,14,16],speed:[4,11,15],spit:7,split:7,squar:[3,4,7,12],src:16,stabl:[4,7],stackedpickl:11,stackoverflow:7,stai:7,standard:[7,16],start_tim:[3,7,11],startup:[7,9,11,12,13,14],stat:7,state:7,statement:16,statist:[4,15],std:[3,7,13,16],step:[1,2,5,14,16],still:[1,7,13],stolen:7,stop:[3,4,7,11,13,18],stop_aft:18,stop_tim:[3,7],stoptim:7,storag:11,store:[3,7,10,11],store_true_peak:11,straightforward:7,strang:4,stream:[3,7],strictmodel:7,string:11,string_data_length:[7,11],structer:7,structur:[3,4,7,11],stuck:2,student:0,stuff:[7,11],style:1,subclass:7,subdir:7,subdirectori:14,submodul:6,subpackag:6,subplot:4,subsequ:3,subset:1,success:[11,16],sudo:16,sum:[3,4,7,11,12],sum_waveform:[3,7],summari:4,sumwaveform:[3,7],support:[4,7,11],supports_append:7,supports_array_field:7,supports_read_back:7,supports_write_in_chunk:7,sure:[2,14,16],suspici:[3,4,7],syntax:[3,7],system:[1,2,7,11,17],tag:1,take:[7,11,13,15],taken:15,tar:[16,17],tbranch:7,team:2,temporari:[3,7,11],test:[1,2,3,4,7,10,11,17],test_pax:1,than:[2,4,7,11,13,17],thei:[1,4,7,16,17],them:[1,2,13,14,16],therefor:[2,3,7,15],thesi:[11,12],thi:[1,2,3,4,7,11,12,13,14,15,16,17,18],thing:[4,17],think:[3,7],thisroot:16,those:[2,11,12],though:[11,17],thought:7,thread:16,threshold:[3,7],through:[1,2,11,17],thu:15,time:[3,7,11,13,14,16],timestamp:[7,11],to_bson:7,to_dict:7,to_fil:7,to_json:7,to_pax_ev:7,todo:11,tofil:11,too:[3,7,11],top:[2,3,4,7,12,15,17],top_hitpattern_spread:[3,7],topcuoglu:0,topçuoğlu:0,total:[7,11],total_number_ev:11,tox:1,tpc:[3,7],tradit:4,transform:[3,4,7],transform_ev:[7,9,12,13,14],transformplugin:[7,9,10,12,13,14],travi:[2,4,16],tree:7,tri:7,trick:7,trigger:[3,4,7,11],triplet:7,troubl:7,troubleshoot:1,truncat:[7,11,13],truncated_gauss_rv:7,truncnorm:7,truth:[4,11],ttree:7,tunnel:[0,2],tupl:7,tweak:16,two:[2,4,14,15],txt:4,typic:[3,17],ubuntu:[2,16,17],uint16:[3,7],uncom:17,uncompress:11,underestim:15,unfortun:2,unib:0,unit:[3,6],unit_nam:7,unittest:1,unix:[3,7],unknown:[3,7,13],unless:[3,7],unpack:16,until:4,updat:[1,2,4,17],updatedb:16,usag:5,user:[7,11,14,17],usr:16,usual:7,util:6,uva:0,uzh:12,v1724:[3,7],valu:[4,7,12,14,15],valuex1y1:7,valuex1y2:7,valuex2y1:7,valuex2y2:7,variabl:[3,7,11,14,16],variou:[4,7],veri:[11,12],version:[1,2,4,11,13,16],veto:[3,4,7,17],via:[11,14,15,17],view:4,virtual:[1,16],virtualenv:[1,16],virualenv:16,volunt:1,wai:[1,3,7],want:[1,7,11,13,14,16,17,18],warn:2,wave:7,waveform:[2,3,4,7,11,13,17,18],waveformdumperbas:11,waveformsimul:[4,7,8],waveformsimulatorfromcsv:11,waveformsimulatorfromnest:11,web:[4,17],webpag:17,websit:[1,2],weight:[3,4,7,12],weighted_mean_vari:7,welcom:1,well:[11,15],were:4,wget:17,what:[2,7,11,14,17],when:[1,2,4,7,11,16],whenev:[7,11],where:[7,16],whether:1,which:[2,3,4,7,11,12,13,14,15,17],white:4,whl:2,who:[2,3,7],whoever:1,whose:[3,7],width:4,wiki:[1,11,13],wikipedia:[11,13],win:2,within:[2,3,7,11,14,17],without:[3,7,11,12],won:13,work:1,workaround:2,would:[1,7,11,18],wrap:4,write_data:7,write_ev:[7,10,11,14],write_event_to_current_fil:11,write_in_chunk:11,write_pandas_datafram:7,writeavro:11,writebson:11,writejson:11,writepanda:4,writetofold:11,writetopicklefil:11,writetostackedpicklefold:11,writezippedbson:11,written:[1,11],www:12,x86_64:[16,17],x_max:7,x_min:7,xam:[4,18],xdio:11,xdp:[3,7],xe100_150213_1411:17,xe100_150213_1411_000000:17,xed:[4,7,8],xedinput:[11,17],xenon100:[4,7,11,17,18],xenon1:18,xenon1t:[1,2,4],xenon:[2,3,7,12,16,17],xerawdp:[3,4,7],xml:4,xvfz:17,yet:7,yield:[11,12,14,15],you:[1,2,3,7,11,13,14,16,17,18],your:[1,2,7,14,17,18],your_map_nam:7,yourself:[2,16],zero:[4,7],zip:11,zipfil:11,zle0:11,zle:4},titles:["Credits","Contributing","Frequently Asked Questions","Event format","History","Welcome to processor for Analyzing XENON1T&#8217;s documentation!","pax","pax package","pax.plugins package","pax.plugins.corrections package","pax.plugins.for_tests package","pax.plugins.io package","pax.plugins.posrec package","pax.plugins.signal_processing package","Plugins","Position Reconstruction","PyROOT installation","Installation","Usage"],titleterms:{"class":14,analyz:5,ask:2,avro:11,bson:11,bug:1,bulkoutput:11,can:2,charg:15,checkpuls:13,chi:15,cluster:13,content:[7,8,9,10,11,12,13],contribut:1,contributor:0,core:7,correct:9,creat:14,credit:0,data_model:7,datastructur:7,develop:[0,1],document:[1,5],dummi:10,event:3,examplecorrect:9,except:7,featur:[1,17],feedback:1,first:17,fix:1,folderio:11,for_test:10,format:[3,7],frequent:2,gamma:15,get:[1,2],git:2,guidelin:1,histori:4,hitfind:13,how:2,implement:1,indic:5,input:14,instal:[16,17],intro:[14,15],lead:0,lng:2,machin:2,minim:15,modul:[7,8,9,10,11,12,13],mongodb:11,neuralnet:12,nikhef:2,option:14,osx:2,output:14,packag:[7,8,9,10,11,12,13],pax:[2,6,7,8,9,10,11,12,13,17],pickl:11,plugin:[7,8,9,10,11,12,13,14],posit:15,posrec:12,posrecchisquaregamma:12,possimpl:12,processor:5,pull:1,pyroot:16,question:2,rawwaveformdump:11,reconstruct:15,report:1,request:1,requir:17,root:[2,11],run:2,set:[2,15],signal_process:13,simul:7,snappi:2,specif:14,squar:15,start:1,step:17,submit:1,submodul:[7,9,10,11,12,13],subpackag:[7,8],sum:15,tabl:5,tip:1,transform:14,type:1,unit:7,usag:[15,18],util:7,waveformsimul:11,weight:15,welcom:5,window:2,work:2,write:1,xeclust:2,xed:11,xenon1t:5}})