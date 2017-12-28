'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip');

var test = async function(){
	var sourceFolder= 'd:/test/';
	var destZip		= 'd:/test24.zip';
	
	try{
		var msg = await qiaoPluginZip.zipFolderSync(sourceFolder, destZip);
		console.log(msg);
	}catch(e){
		console.log(e);
	}
};

test();