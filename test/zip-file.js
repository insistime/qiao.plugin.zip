'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip.js');

function test(){
	var sourceFile	= 'd:/test.js';
	var destZip		= 'd:/test01.zip';
	
	qiaoPluginZip.zipFile(sourceFile, destZip);
}

test();