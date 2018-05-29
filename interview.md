# 面试

* [计算机基础知识](https://github.com/CyC2018/Interview-Notebook)

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

## 复习过程

1. [HTML CSS] 阅读[前端开发面试题](https://juejin.im/entry/5781b8db0a2b58005765e628) HTML CSS 部分。

2. [js基础知识] 阅读 [js基础知识](https://github.com/iSAM2016/underscore) 

3. [专题系列目录](https://github.com/mqyqingfeng/Blog)

4. [js面试题目] 阅读[前端开发面试题](https://juejin.im/entry/5781b8db0a2b58005765e628) js 部分

* [前端面试题链接](https://github.com/qiu-deqing/FE-interview)

* [面试题目](https://github.com/chenjinxinlove/javascriptInterview)




## 专题补充
> 补充了一些其他的面试题，暂时分为 js  css HTML 移动端

## js

#####  模块化-AMD

[JS模块加载器加载原理是怎么样的？](https://www.zhihu.com/question/21157540)

[requirejs的用法和原理分析](https://github.com/HRFE/blog/issues/10)

[浏览器解析](https://www.zhihu.com/question/20027966)

#### JQ

* 手写一个jQuery插件

* 在jquery方法和原型上面添加方法的区别和实现，以及jquery对象的实现

    jquery 扩展分为 jQuery.extend 和 jquery.fn.extend.  静态方法
    前者是类扩展，调用的方式为 &.example
    后者为 jquery.fn = jquery.prototype = {
        init: function() {}

    }, 调用的话应该是 $().fn()

#### 跨域

[链接](https://github.com/hijiangtao/hijiangtao.github.io/blob/master/_posts/2017-06-13-Cross-Origin-Resource-Sharing-Solutions.md)

#### HTTP

* InterQues.md(协商缓存)(强缓存)
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
{
    display: table-cell;
    vertical-align: middle
}

* 基本的两列自适应布局

* position实现左侧栏高度自适应，依右侧栏高度而定 ( 等高布局)

直接上图，左侧菜单只是显示部分，右侧的高度随时可能变化，要求：左侧栏的高度也跟随右侧栏一起变化！

方法：position:absolute; top:0; bottom:0;

使用position:absolute; 去定义顶部距离、底部距离，就可以让整个div的高度自适应了。

#### 路由

* 实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？
    * history.pushState(state,title, url)

* 对前端路由的理解？前后端路由的区别？
    * [前端路由与后端路由](https://blog.csdn.net/gongzhuxiaoxin/article/details/52718298)
    * onhashchange 事件
    * historyAPI 

##### 移动端

* 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。

[移动端点击穿透事件](https://juejin.im/entry/56ce9c97c24aa80052101aab)
[300 毫秒点击延迟的来龙去脉](https://thx.github.io/mobile/300ms-click-delay)

#### bind

[bind call](https://www.cnblogs.com/coco1s/p/4833199.html)


自定义事件
customEvent
浏览器加载顺序
element 组件的设计
gulp
promise
数组去重

#### 谈谈性能优化

代码性能优化

代码层面： 避免使用css 表达式，避免使用高级选择器，统配选择器

缓存利用：

减少请求数量


#### 手写函数
> 见 common.js

 requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何
缓存的？）

.call() 和 .apply() 的区别？

#### 一个页面从输入URL到页面加载显示完成，这过程发生了什么

1. DNS 解析
2. TCP 链接
3. 发送HTTP请求
4. 服务器处理请求并返回HTTP报文
5. 浏览器解析渲染页面
6. 链接结束

输入地址
浏览器查找域名的 IP 地址 这一步包括 DNS 具体的查找过程，包括：浏览器缓存->系统缓存->路由器缓存...
浏览器向 web 服务器发送一个 HTTP 请求
服务器的永久重定向响应（从 http://example.com 到 http://www.example.com）
浏览器跟踪重定向地址
服务器处理请求
服务器返回一个 HTTP 响应
浏览器显示 HTML
浏览器发送请求获取嵌入在 HTML 中的资源（如图片、音频、视频、CSS、JS等等）
. 浏览器发送异步请求



#### RESTful

关键点 如何在互联网中使用软件，他是一种流行的互联网软件架构m


