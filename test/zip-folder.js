'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip.js');

function test(){
	var sourceFolder= 'd:/test/';
	var destZip		= 'd:/test03.zip';
	
	qiaoPluginZip.zipFolder(sourceFolder, destZip);
}

test();