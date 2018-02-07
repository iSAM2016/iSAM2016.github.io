# 模块的学习
##ES6 模块学习
 [阮一峰的ES6](http://es6.ruanyifeng.com/#docs/module-loader) 
###export输入

1. 基本语法
```
export var firstName = 'add';
export var lastNmae = 'jk';
```

2. 其他的写法
必须写{}，否则报错export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
```
var firstName = 'add';
var lastNmae = 'jk';
export {firstName, lastName};
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
```

3. 可以重命名
```
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```

4. export default 命令
```
//输出一个函数 其他模块导入可以为他命名
//本质上export default 就是输入一个叫default 的变量和方法，然后系统允许币为他取名字,不允许为他添加赋值语句
export default function() {
    console.log
}
import funnane from './kl.js';
```

```
// 同时导入default，和其他
import _, { each, each as forEach } from 'lodash';
export default function (obj){}；
export function each() {}
export {each as forEach}
```


### import 导入
1. import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

import是静态执行的，所以不能使用表达式和变量
```
// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
```

2. 模块的整体导入
可以整体加载模块，可以用（*）指定一个对象
```
import *  as circle from './circle';
但是会忽略 default 方法
```

## ES6 模块与CommonJS 模块的差异
1. CommonJS 模块输入时一个值的靠背，ES模块输入的是指的引用
2. CommonJS 模块是运行加载，ES魔铠是编译时输入的接口
3. CommonJS 加载时一个对象的加载（module.exports属性）该对象只用在脚本运行完成时候生成，而ES6模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

**3CommonJS 模块输入是值的拷贝

```
// main.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
```

```
// index.js
var mod = require('./main.js');
console.log(mod.counter);
mod.incCounter();
console.log(mod.counter);
```
上面代码说明，main.js模块加载以后，它的内部变化就影响不到输出的mod.counter了。这是因为mod.counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。

## node 加载
node 加载ES6 模块是比较麻烦的，因为他有自己的CommonJS 模块格式，与ES6的模块是不兼容的。
node 要求Es6 模块使用.mjs 后缀文件名字，脚本文件使用import 或 export,那么就必须采用.mjs后缀名。require命令不能加载.mjs文件，会报错，只有import命令才可以加载.mjs文件。反过来，.mjs文件里面也不能使用require命令，必须使用import。

## ES6 加载CommonJS 模块
commonJS 模块 输入定义在module.exports 这个属性。
```
// a.js 这里使用CommonJS的风格
function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    return element;
}
module.exports = {
    generateText,
    a: 123,
};

// 等同于
export default {
    generateText,
    a: 123,
};
```

es6 import 加载commonJS模块， module.exports 会被视为默认输出，即import 命令实际桑输出这样的一个对象{default: module.exports}
```
// 写法一
import baz from './sub';
// baz = {a: 123, bar: generateText};

// 写法二
import {default as baz} from './sub';
// baz = {a: 123, bar: generateText};

// 写法三
import * as baz from './sub';
// baz = {
//   get default() {return module.exports;},
//   get foo() {return this.default.foo}.bind(baz),
//   get bar() {return this.default.bar}.bind(baz)
// }
```
 

 因为编译的方式不一样，import 加载时候不允许，实现以下的方式，
 ```
 import {readfile} from './sub.js';
 // readfile => undefined
 ```
 可以一一对应
```
import {
    a,
    generateText
} from './sub.js';
```

##webpck打包之后
在完成打包之后形成的文件中引入的JS 的代码
```
 <script type="text/javascript" src="manifest.239e.js"></script>
 <script type="text/javascript" src="main.ea10.js"></script>
```

首先 mainfest.js
```
 (function(modules) { // webpackBootstrap
     var parentJsonpFunction = window["webpackJsonp"];
     window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {};

     var installedModules = {};

     var installedChunks = {
         1: 0
     };

     function __webpack_require__(moduleId) {}

     __webpack_require__.e = function requireEnsure(chunkId) {};

     __webpack_require__.m = modules;

     __webpack_require__.c = installedModules;

     __webpack_require__.d = function(exports, name, getter) {};

     __webpack_require__.n = function(module) {};

     __webpack_require__.o = function(object, property) {};

     __webpack_require__.p = "";

     __webpack_require__.oe = function(err) {};
 })
 /************************************************************************/
 ([]);
```

main.js
```
// 函数调用
webpackJsonp([0], [...] [0]);
```

webpackJsonp 函数有三个参数，分别为
1. chunkIds
2. moreModules
3. executeModules

其中moreModules，是引用的模块，以数组的形式出现，不管是多少层级怎么引用文件，就会后几个数组参数。其余的参数随后分析。

**webpackJsonpCallback 进行了一个for 循环**
```
  for (; i < chunkIds.length; i++) {
             chunkId = chunkIds[i];
             if (installedChunks[chunkId]) {
                 resolves.push(installedChunks[chunkId][0]);
             }
             installedChunks[chunkId] = 0;
         }

// objects to store loaded and loading chunks
// 对象来存储加载和加载块。
 var installedChunks = {
     1: 0
 };        
```
形成的installedChunks 值为
```
installedChunks={
    0:0,
    1：0
}
```
此时并没有chunkIds 的目的

**遍历moreModules**
```
//将模块函数形成的数组，置换到新的数组当中
 for (moduleId in moreModules) {
     if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
         modules[moduleId] = moreModules[moduleId];
     }
 }
```



形成一个自执行函数，有连个主要函数 
webpack 打包之后形成奇怪的引用方式， window["webpackJsonp"]，__webpack_require__


