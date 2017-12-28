'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip');

function test(){
	var sourceFile	= 'd:/test.js';
	var destZip		= 'd:/test22.zip';
	
	qiaoPluginZip.zipFile(sourceFile, destZip, function(err, msg){
		if(err) throw err;
		
		console.log(msg);
	});
};

test();