'use strict';

var fs		= require('fs');
var AdmZip 	= require('adm-zip');

/**
 * unzip
 * 	zipFile，待解压缩的zip文件
 * 	destFolder，解压缩后存放的文件夹
 */
exports.unzip = function(zipFile, destFolder){
	var zip = new AdmZip(zipFile);
	zip.extractAllTo(destFolder, true);
};

//// creating archives 
//var zip = new AdmZip();
//
//// add file directly 
//zip.addFile("test.txt", new Buffer("inner content of the file"), "entry comment goes here");
//// add local file 
//zip.addLocalFile("/home/me/some_picture.png");
//// get everything as a buffer 
//var willSendthis = zip.toBuffer();
//// or write everything to disk 
//zip.writeZip(/*target file name*/"/home/me/files.zip");
//
//
//// ... more examples in the wiki 