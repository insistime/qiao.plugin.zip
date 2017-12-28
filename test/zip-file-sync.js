'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip');

var test = async function(){
	var sourceFile	= 'd:/test.js';
	var destZip		= 'd:/test22.zip';
	
	try{
		var msg = await qiaoPluginZip.zipFileSync(sourceFile, destZip);
		console.log(msg);
	}catch(e){
		console.log(e);
	}
};

test();