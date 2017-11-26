# 模块的学习
###ES6 模块学习
 主要参考阮一峰的笔记，


 
####主要是通过export输入

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


#### import 导入
1.
//import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

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

2.模块的整体导入
//可以整体加载模块，可以用（*）指定一个对象
```
import *  as circle from './circle';
但是会忽略 default 方法
```

### ES6 模块与CommonJS 模块的差异
1. CommonJS 模块输入时一个值的靠背，ES模块输入的是指的引用
2. CommonJS 模块是运行加载，ES魔铠是编译时输入的接口
3. CommonJS 加载时一个对象的加载（module.exports属性）该对象只用在脚本运行完成时候生成，而ES6模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

// 3CommonJS 模块输入是值的拷贝

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

上面代码说明，main.js模块加载以后，它的内部变化就影响不到输出的mod.counter了。这是因为mod.counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。
```
#### 总结


browserify 
node.js 模块
commonJs 服务器
AMD 浏览器