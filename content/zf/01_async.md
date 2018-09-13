# 珠峰架构师成长计划

## 0.Async

### 1.异步

- 所谓"异步"，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段,比如，有一个任务是读取文件进行处理，异步的执行过程就是下面这样。

  ![]('../../img/asyncfunc1.png')

* 这种不连续的执行，就叫做异步。相应地，连续的执行，就叫做同步。

### 2 高阶函数

> 高阶函数作为一等公民，可以作为参数和返回值

- 2.1 可以用于生成批量函数

```
let toString = Object.prototype.toString;
let isString = function (obj) {
  return toString.call(obj) == `[object String]`;
}
let isFunction = function (obj) {
  return toString.call(obj) == `[object Function]`;
}
let isType = function (type) {
  return function (obj) {
    return toString.call(obj) == `[object ${type}]`;
  }
}
```

- 2.2 可以用于需要调用多次才执行的函数

```
let after = function(times,task){
  return function(){
    if(times--==1){
      return task.apply(this,arguments);
    }
  }
}
let fn = after(3,function(){
  console.log(3);});
fn();
```

### 异步编程的语法目标，就是怎样让它更像同步编程,有以下几种

- 回调函数实现
- 事件监听
- 发布订阅
- promise/A+ 和生成器函数
- async/await

### 5 回调的问题

#### 5.1 异常处理

```
try{

}catch(e){

}
```

异步代码中`try cache` 不在生效

```
let async = function(callback){
  try{
    setTimeout(function(){
      callback();
    },1000)
  }catch(e){
    console.log('捕获错误',e);
  }
}

async(function(){
  console.log(t);
});
```

因为这个回调函数被存放了起来，直到下一个事件环的时候才会取出,try 只能捕获当前循环内的异常，对 callback 异步无能为力。

Node 在处理异常有一个约定，将异常作为回调的第一个实参传回，如果为空表示没有出错。

```
async(function(err,callback){
  if(err){
    console.log(err);
  }
});
```

异步方法也要遵循两个原则

- 必须在异步之后调用传入的回调函数
- 如果出错了要向回调函数传入异常供调用者判断

```
let async = function(callback){
try{
  setTimeout(function(){
    if(success)
      callback(null);
    else
      callback('错误');
  },1000)
}catch(e){
  console.log('捕获错误',e);
}
}
```

#### 5.2 回调地狱 异步多级依赖的情况下嵌套非常深，代码难以阅读的维护

```
let fs = require('fs');
fs.readFile('template.txt','utf8',function(err,template){
fs.readFile('data.txt','utf8',function(err,data){
  console.log(template+' '+data);
})
})
```

### 6. 异步流程解决方案

#### 6.1 事件发布/订阅模型

```
let fs = require("fs");
let EventEmitter = require("events");
let eve = new EventEmitter();
let html = {};

eve.on("ready", function(key, value) {
  html[key] = value;
  if (Object.keys(html).length === 1) {
    console.log(html);
  }
});

function render() {
  fs.readFile("info.md", "utf8", function(err, template) {
    eve.emit("ready", "template", template);
  });
}

render();
```

#### 6.2 哨兵变量

```
let after = function(times, callback) {
  let result = {};
  return function(key, value) {
    result[key] = value;
    if (Object.keys(result).length == times) {
      callback(result);
    }
  };
};

let done = after(1, function(result) {
  console.log(result);
});

function render() {
  fs.readFile("info.md", "utf8", function(err, template) {
    done("ready", template);
  });
}

render();
```

#### 6.3 Promise/Deferred 模式

#### 6.4 生成器 Generators/ yield

- 当你执行一个函数到时候，你可在某个点暂停执行，并且做一些其他工作，然后在返回这个函数接续执行,甚至带一些新的参数。然后继续执行
- 上面描述的场景正是 JavaScript 生成器函数所致力于解决的问题。当我们调用一个生成器函数的时候，它并不会立即执行， 而是需要我们手动的去执行迭代操作（next 方法）。也就是说，你调用生成器函数，它会返回给你一个迭代器。迭代器会遍历每个中断点。
- next 方法返回值的 value 属性，是 Generator 函数向外输出数据；next 方法还可以接受参数，这是向 Generator 函数体内输入数据

##### 6.4.1 生成器的使用

```
function* foo () {
  var index = 0;
  while (index < 2) {
    yield index++; //暂停函数执行，并执行yield后的操作
  }
}
var bar =  foo(); // 返回的其实是一个迭代器

console.log(bar.next());    // { value: 0, done: false }
console.log(bar.next());    // { value: 1, done: false }
console.log(bar.next());    // { value: undefined, done: true }
```

##### 6.4.2 co

`co`是一个为`Node.js`和浏览器打造的基于生成器的流程控制工具，借助于 Promise，你可以使用更加优雅的方式编写非阻塞代码。

```
let fs = require('fs');
function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, data) {
      if (err)
        reject(err);
      else
        resolve(data);
    })
  })
}
function *read() {
  let template = yield readFile('./template.txt');
  let data = yield readFile('./data.txt');
  return template + '+' + data;
}
co(read).then(function (data) {
  console.log(data);
}, function (err) {
  console.log(err);
});
```

```
function co(gen) {
  let it = gen();
  return new Promise(function (resolve, reject) {
    !function next(lastVal) {
      let {value, done} = it.next(lastVal);
      if (done) {
        resolve(value);
      } else {
        value.then(next, reason => reject(reason));
      }
    }();
  });
}
```

### async/await

使用 async 关键字，你可以轻松地达成之前使用生成器和 co 函数所做到的工作

#### 6.5.1 Async 的优点

- 内置执行器
- 更好的语义
- 更广的适用性

```
let fs = require('fs');
function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err)
        reject(err);
      else
        resolve(data);
    })
  })
}

async function read() {
  let template = await readFile('./template.txt');
  let data = await readFile('./data.txt');
  return template + '+' + data;
}
let result = read();
result.then(data=>console.log(data));
```

#### 6.5.2 async 函数的实现

async 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。

```
async function read() {
  let template = await readFile('./template.txt');
  let data = await readFile('./data.txt');
  return template + '+' + data;
}

// 等同于
function read(){
  return co(function*() {
    let template = yield readFile('./template.txt');
    let data = yield readFile('./data.txt');
    return template + '+' + data;
  });
}
```

## vscode 调试

# 学习 node

### 进程的概念

计算机执行的最小单位，比如 qq 运行就是一个进程。当然进程会有很多

### 线程的概念

线程包含在进程里面，线程也有很多。

### node

node 是单线程，可以利用事件环处理. 当然也存在多线程，比如开启一个 setTimeout. 但是不适合 cpu 密集操作，大量计算。node 适合异步 io 操作。

### 中间层

### js 解析器和 UI 线程是共同一个线程

## node 能解决什么问题

- ndoe 的首要目标是提供一种简单的，用于创建高性能服务器的开发方式工具
- web 服务器的瓶颈在于并发的用户量

### node 是什么

### buffer 是什么

- 缓冲区 buffer 是暂时存放输入输出数据的一段内存
- js 语言没有二进制数据类型，而在处理 TCP 和文件流的时候，必须处理二进制数据
- NodeJS 提供了一个 Buffer 对象来提供对二进制数据的操作
- 是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
- Buffer 好比由一个 8 位字节元素组成的数组，可以有效的在 JavasScript 中表示二进制数据

### 定义 buffer 的三种方式

1. 通过长度定义 buffer

### 微任务 宏任务

### mysql 的缺点、 mongoos 的 缺钱

brew 安装 mysql[https://www.jianshu.com/p/7dce881eaa62]
