var tooltips = {
	project_detail_processes:"The number of worker processes the agent should start.",
	project_detail_threads:"The number of worker threads that each worker process spawns.",
	project_detail_duration:"The maximum length of time in milliseconds that each worker process should run for. grinder.duration can be specified in conjunction with grinder.runs, in which case the worker processes will terminate if either the duration time or the number of runs is exceeded.",
	project_detail_runcnt:"The number of runs of the test script each thread performs. 0 means 'run forever', and should be used when you are using the console to control your test runs.",
	project_detail_ignoreSampleCount:"The number of samples to ignore during the test starting.",
	project_detail_sampleInterval:"The time in milisecond to collect statistic data from agent.",
	project_detail_logDirectory:"Directory to write log files to. Created if it doesn't already exist.",
	project_detail_useConsole:"Set to false to set the agent and worker processes not to use the console.",
	project_detail_reportTimesConsole:"Set to false to disable reporting of timing information to the console; other statistics are still reported.",
	project_detail_debugSingleProcess:"If set to true, the agent process spawns engines in threads rather than processes, using special class loaders to isolate the engines. This allows the engine to be easily run in a debugger. This is primarily a tool for debugging The Grinder engine, but it might also be useful to advanced users.",
	project_detail_instrumentation:"For advanced use only. Enables the new instrumentation engine.",
	project_detail_reportConsoleInterval:"For advanced use only. The period at which each process sends updates to the console.",
	project_detail_sleepTimeVariation:"The Grinder varies the sleep times specified in scripts according to a Normal distribution. This property specifies a fractional range within which nearly all (99.75%) of the times will lie. E.g., if the sleep time is specified as 1000 and the sleepTimeVariation is set to 0.1, then 99.75% of the actual sleep times will be between 900 and 1100 milliseconds.",
	project_detail_sleepTimeFactor:"Apply a factor to all the sleep times you've specified, either through a property of in a script. Setting this to 0.1 would run the script ten times as fast.",
	project_detail_debugSingleProcessshares:"For advanced use only. Specifies a comma separated list of names of classes that should be shared between the worker engines when grinder.debug.singleprocess is true. Class names can end with a * wildcard. See bug 2314157 for more details.",
	project_detail_hostId:"Override the 'host' string used in log filenames and logs.",
	project_detail_consoleHost:"The IP address or host name that the agent and worker processes use to contact the console.",
	project_detail_consolePort:"The IP port that the agent and worker processes use to contact the console.",
	project_detail_jvm:"Use an alternate JVM for worker processes. Defaults to java so you do not need to specify this if your PATH is sensible.",
	project_detail_jvmArguments:"Additional arguments to worker process JVMs.",
	project_detail_jvmClasspath:"Use to adjust the classpath used for the worker process JVMs. Anything specified here will be prepended to the classpath used to start the Grinder processes.",
	project_detail_sendMail:"Send report mail to test operator when test finished.",
	reservation_sendMail:"Send warning mail to reservation owner when the deadline is coming."
};

var advances = {
	project_detail_processes:"It should be same as CPU number.",
	project_detail_threads:"Suggest 15.\nIt is related with test response time and load of agent.\nIf the load of agent is not high, you can increase the thread count.",
	project_detail_runcnt:"Not to set too small number. Because the test may be finished before the console collecting statistic data.",
	project_detail_sampleInterval:"Default 1000ms.",
	project_detail_logDirectory:"'grinder_logs', it can be created automatically.",
	project_detail_useConsole:"Should be true in nGrinder.",
	project_detail_debugSingleProcess:"Not to set TRUE, it is Just used for developer dubuging.",
	project_detail_instrumentation:"Not to set TRUE, For advanced use only.",
	project_detail_consoleHost:"Not to set by manual. It will be detected automatically.",
	project_detail_consolePort:"Not to set by manual. It will be detected automatically.",
	project_detail_jvm:"Just use system java path. If you want to change this option, please contact admin.",
	project_detail_jvmArguments:"Not need to set.",
	project_detail_jvmClasspath:"Not need to set."
};