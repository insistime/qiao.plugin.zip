'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip.js');

function test(){
	var zipFile 	= 'd:/test1.zip';
	var destFolder	= 'd:/test2/';
	
	qiaoPluginZip.unzip(zipFile, destFolder);
}

test();