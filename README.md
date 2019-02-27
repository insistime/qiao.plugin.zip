# urls
## homepage
[https://code.insistime.com/qiao.plugin.zip](https://code.insistime.com/qiao.plugin.zip)

## github
[https://github.com/insistime/qiao.plugin.zip](https://github.com/insistime/qiao.plugin.zip)

## npm
[https://www.npmjs.com/package/qiao.plugin.zip](https://www.npmjs.com/package/qiao.plugin.zip)

# started
## install
npm install qiao.plugin.zip

## dependencies
1. adm-zip

## documentation
1. adm-zip, https://www.npmjs.com/package/adm-zip

# api
## unzip
```javascript
'use strict';

var qiaoPluginZip = require('qiao.plugin.zip');

function test(){
	var zipFile 	= 'd:/test1.zip';
	var destFolder	= 'd:/test2/';
	
	qiaoPluginZip.unzip(zipFile, destFolder);
}

test();
```

## zipFile
```javascript
'use strict';

var qiaoPluginZip = require('qiao.plugin.zip');

function test(){
	var sourceFile	= 'd:/test.js';
	var destZip		= 'd:/test01.zip';
	
	qiaoPluginZip.zipFile(sourceFile, destZip);
}

test();
```

## zipFolder
```javascript
'use strict';

var qiaoPluginZip = require('qiao.plugin.zip');

function test(){
	var sourceFolder= 'd:/test/';
	var destZip		= 'd:/test03.zip';
	
	qiaoPluginZip.zipFolder(sourceFolder, destZip);
}

test();
```

# also in cli
```shell
npm install -g qiao.plugin.zip

qzip unzip	'd:/test.zip'	'd:/test'
qzip zipfile	'd:/test.js'	'd:/test1.zip'
qzip zipfolder	'd:/test/'	'd:/test2.zip'

or

qzip un	'd:/test.zip'	'd:/test'
qzip fi	'd:/test.js'	'd:/test1.zip'
qzip fo	'd:/test/'	'd:/test2.zip'

or

qzip | qzip -h for help
```

# version
## 0.1.4.20190109
1. qzip
2. modify md
3. add qiao.plugin.cli
4. modify qzip
5. update qiao.plugin.cli@0.0.6
6. output help

## 0.1.3.20190107
1. nodejs zip and unzip tool
2. update all packages

## 0.1.2.20181127
1. modify method name
2. add .js

## 0.1.1.20181012
1. npm audit

## 0.1.0.20180720
1. https homepage

## 0.0.9.20180719
1. modify readme.md

## 0.0.8.20180511
1. npm audit

## 0.0.7.20180210
1. highlight md

## 0.0.6.20180208
1. update git url

## 0.0.5.20180117
1. add log
2. var test
3. wait...
4. add subdir

## 0.0.4.20180113
1. 代码优化

## 0.0.3.20180112
1. add qzip cli
2. npm publish 0.0.9
3. crlf --> lf

## 0.0.2.20171229
1. 修改readme.md的代码示例

## 0.0.1.20171228
1. 初始化项目
2. unzip by adm-zip
3. zip file by archiver
4. zip folder by archiver
5. zip file sync
6. zip folder sync
7. readme.md
8. add index.js
