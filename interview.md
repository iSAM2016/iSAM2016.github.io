# 面试

### 面试点：

#### HTML CSS
> 见复习过程 第一步

#### js
> 分为两个部分 
>1 基础知识 
>2 高级, 高级的部分都可以单独拎出来

 1. 数据类型、运算、对象、Function、继承、闭包、作用域、原型链、事件、RegExp、JSON、Ajax、DOM、BOM、内存泄漏、 bind
 
 2. 跨域、异步装载、模板引擎、前端MVC、路由、模块化、Canvas、ECMAScript、 Nodejs

####  框架
 
 VUE、vue-router、webpack

#### 其他

移动端、响应式、自动化构建、HTTP、svg、 WebSocket 离线存储、WEB安全、优化、重构、团队协作、可维护、易用性、SEO、UED、架构、职业生涯、快速学习能力


## 复习过程

1. [HTML CSS] 阅读[前端开发面试题](https://juejin.im/entry/5781b8db0a2b58005765e628) HTML CSS 部分。

2. [js基础知识] 阅读 [js基础知识](https://github.com/iSAM2016/underscore) 

3. [专题系列目录](https://github.com/mqyqingfeng/Blog)

4. [js面试题目] 阅读[前端开发面试题](https://juejin.im/entry/5781b8db0a2b58005765e628) js 部分

* [前端面试题链接](https://github.com/qiu-deqing/FE-interview)
* [面试题目](https://github.com/chenjinxinlove/javascriptInterview)
* [牛客网](https://zhuanlan.zhihu.com/p/28911400?utm_source=wechat_session&utm_medium=social)



## 专题补充
> 补充了一些其他的面试题，暂时分为 js  css HTML 移动端

## js

#####  模块化-AMD

[JS模块加载器加载原理是怎么样的？](https://www.zhihu.com/question/21157540)

[requirejs的用法和原理分析](https://github.com/HRFE/blog/issues/10)

[浏览器解析](https://www.zhihu.com/question/20027966)

#### HTTP

[](https://blog.csdn.net/qmhball/article/details/7838989)

##### CSS

* 高度宽度成比例问题，使用padding-bottom 来实现

```
.box{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 50%;
}

.item{
    width: 100%;
}
```

* 清除浮动

```
.clear{
    zoom: 1
}
.clear:after{
    content: '';
    dispaly: block
    clear
}
```

* 居中

>固定宽度和长度
>没有固定长度和宽度

{
    display:  flex;
    justify-content:center;
    align-items: center;
}
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%-50%)
}



##### 移动端

* 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。

[移动端点击穿透事件](https://juejin.im/entry/56ce9c97c24aa80052101aab)
[300 毫秒点击延迟的来龙去脉](https://thx.github.io/mobile/300ms-click-delay)

自定义事件
customEvent



浏览器加载顺序

element 组件的设计


gulp
promise
数组去重


#### 手写函数
快排序
发布订阅模式
事件注册
拷贝
bind 实现
jsonp 
 requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何
缓存的？）

.call() 和 .apply() 的区别？


```
if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
}else {
    xhr = new ActiveXbject();
}
 xhr.open("GET", "data.txt", true)
 xhr.send();
 onreadystatechange
 xhr.onreadystatechange = function() {
     xhr.readyState === 4 {
        xhr.state === 1 
     }
 }
```
```
function deepcopy(obj) {
    if(!obj || typeof obj !== 'object') {
        throw Error('')
    }
    var target = Object.prototype.toString.call(obj) === '[Object object]' ? {} : [];
     for( key in target) {
         if(obj.hasOwnPropertype(key)) {
             if( obj(key)) && Object.prototype.toString.call(obj) === '[Object object]') {
                targetObj[keys] = deepClone(source[keys]);
             }else {
                target[key] = obj[key]
             }
         }
     }
     return targetobj
}
```

js 堆栈溢出

下面的代码会造成堆栈溢出，怎么优化

```
var  list  = readHugList();

var nextListItem = function(){
    var item = list.pop();
    if(item){
        nextListItem();
    }
}
```
```
var  list  = readHugList();

var nextListItem = function(){
    var item = list.pop();
    if(item){
       setTimeout(nextListItem,0}
    }
}
```
首先搞清楚，堆栈溢出的原因。
每次在执行代码时候都会分配一定尺寸的栈空间，每次方法调用的时候都会在栈里存储一定信息（如参数，局部变量，返回值等等），这些信息再少也会占用一定的空间，成千上万个此类空间积累起来，自然就超过线程的栈空间了。
解决这个问题有两个思路：
1. 异步
2. 闭包

**为什么使用setTimeout就可以解决问题？我们看下与没用之前的差别。如果没有使用setTimeout，那么函数将在大数据前不断的回调，直到最后走到重点，最初的函数才运行结束，释放内存。 但是如果使用了setTimeout，我们知道它是异步的，即使设置了时间为0，它也允许先执行下面的内容，可以释放堆栈，从而避免堆栈溢出的问题。 换言之，加了setTimeout，nextListItem函数被压入事件队列，函数可以退出，因此每次会清空调用堆栈。**

2. 闭包

```
var nextListItem = function(){
    var item = list.pop();
    if(item){
       return  nextListItem();
    }
}

function autoRun(fun) {
    var value = nextListItem();
    while(typeof value === 'function') {
        value = nextListItem()
    }
    return
}
```







下面函数输出是什么

```
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);// 456 

```
如果了解了es6 的map 就会意识到，对象key 的值只允许string 类型的，这也是为什么会引入map 数据类型。 好了，那如果把一个对象作为key值，就会调用toString方法了。Object.prototype.toString(obj)会得到什么呢？没错`[object Object]。

```
a[b] ==> a["[object Object"] = 123;
a[b] ==> a["[object Object"] = 456;
```



### 参考资料
```
[](https://github.com/forrany/Web-Project/blob/master/%E4%BA%8C%E3%80%81JavaScript%E6%8E%92%E5%9D%91%E6%8C%87%E5%8D%97(%E4%BA%8C).md)
```