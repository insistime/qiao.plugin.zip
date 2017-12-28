'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip');

function test(){
	var sourceFolder= 'd:/test/';
	var destZip		= 'd:/test23.zip';
	
	qiaoPluginZip.zipFolder(sourceFolder, destZip, function(err, msg){
		if(err) throw err;
		
		console.log(msg);
	});
}

test();