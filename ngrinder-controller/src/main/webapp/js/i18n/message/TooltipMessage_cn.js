var tooltips = {
	project_detail_processes:"运行测试使用的工作进程.",
	project_detail_threads:"运行测试总共启用的线程数.",
	project_detail_duration:"测试运行的最长时间（单位毫秒）. 如果和运行个数共同使用，  不管是达到运行时间、或者达到运行次数，测试都会停止.",
	project_detail_runcnt:"脚本中test运行的次数. 0 代表一直执行.",
	project_detail_ignoreSampleCount:"开始测试时忽略的样本个数.",
	project_detail_sampleInterval:"手机统计信息的毫秒级的时间间隔",
	project_detail_logDirectory:"用于保存grinder日志的目录，如果该目录不存在，系统会自动创建.",
	project_detail_useConsole:"是否使用控制端，如果设置成‘否’，agent就不会把运行日志以及统计信息发送给控制台.",
	project_detail_reportTimesConsole:"是否发送时间信息到控制端.",
	project_detail_debugSingleProcess:"如果设置成‘是’，就会在agent运行的进程里面启用线程去模拟进程运行test。主要用于开发人员调试。",
	project_detail_instrumentation:"高级应用，启用instrumentation引擎.",
	project_detail_reportConsoleInterval:"每个工作进程给控制端发送更新的间隔.",
	project_detail_sleepTimeVariation:"脚本里sleep时间变量",
	project_detail_sleepTimeFactor:"线程sleep时间因子，只影响脚本里面grinder.sleep()方法。",
	project_detail_debugSingleProcessshares:"单进程调试模式中使用，用于设置各个工作进程直接共享的类。",
	project_detail_hostId:"用于覆盖日志文件名以及文件里面的主机ID.",
	project_detail_consoleHost:"Grinder控制台的地址.",
	project_detail_consolePort:"Grinder控制台的端口.",
	project_detail_jvm:"使用非系统默认的JVM。",
	project_detail_jvmArguments:"用于设置运行测试的工作进程JVM的运行参数。",
	project_detail_jvmClasspath:"用于设置运行测试的工作进程JVM的类路径，如果需要添加测试脚本运行时需要使用的第三方jar，可以在这里添加。但是在nGrinder系统中，系统会自动添加用户上传的jar包到类路径里面。",
	project_detail_sendMail:"测试结束时向测试执行人员发送结果报告邮件。",
	reservation_sendMail:"预约到期时向预约人发送提醒邮件。"
};

var advances = {
	project_detail_processes:"建议与服务器CPU个数相同.",
	project_detail_threads:"建议 15.<br>它跟测试脚本的运行响应时间和代理机器的负载有关。如果代理机器cpu负载很高，说明线程数过高。",
	project_detail_runcnt:"如果该值设置太小，很可能测试运行完之前还得不到统计数据.",
	project_detail_sampleInterval:"默认为 1000ms.",
	project_detail_logDirectory:"'grinder_logs', 如果为空，会自动添加默认路径.",
	project_detail_useConsole:"需要设置成'是'.",
	project_detail_debugSingleProcess:"需要设置成'否'.",
	project_detail_instrumentation:"用于高级用途，需要设置成'否'，否则很可能运行测试出错.",
	project_detail_consoleHost:"系统自动检测，无需手动设置.",
	project_detail_consolePort:"系统自动检测，无需手动设置.",
	project_detail_jvm:"使用系统Java路径，如需修改此选项，请联络管理员。",
	project_detail_jvmArguments:"不需要设置.",
	project_detail_jvmClasspath:"不需要设置."
};