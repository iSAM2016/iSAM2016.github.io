# 面试

### 面试点：
* [计算机基础知识](https://github.com/CyC2018/Interview-Notebook)

面试的时候尽量体现你的广度和深度，比如浏览器的兼容性来说，先把这块知识体系罗列出来，考察广度。


#### HTML CSS
> 见复习过程 第一步

点击穿透事件就是如果点击一个浮层中的元素，然后浮层马上消失，原来福成遮住的元素也会触发click 事件，这与冒泡无关，没有父子关系间的元素也会发生这个现象。

[](./img/static.InterviewMapMind.png)


## 复习过程

1. [HTML CSS] 阅读[前端开发面试题](https://juejin.im/entry/5781b8db0a2b58005765e628) HTML CSS 部分。

2. [js基础知识] 阅读 [js基础知识](https://github.com/iSAM2016/iSAM2016.github.io/blob/master/content/jsbase.md) 

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
    overflow: hidden
    clear: both;
}
.clear:before, .clear: after{
    content: '',
  display: table;
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

* 简述几个css hack?
    * 图片间隙:在div中插入图片，图片会将div下方撑大3px
        * 将div和img 写在同一行
        * 给img 添加dispaly: block

* href和scr 的区别？ title和alt
    * href 指定网路资源的位置
    * 是把资源嵌入到本地的页面当中，是页面不可缺少的一部分
    * title 是提供额外的说明
    * alt: 是代替的文字，图片无法使用的时候代替图片        

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

### 参考资料
```
[](https://github.com/forrany/Web-Project/blob/master/%E4%BA%8C%E3%80%81JavaScript%E6%8E%92%E5%9D%91%E6%8C%87%E5%8D%97(%E4%BA%8C).md)
```
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

#### webpack 

* webpack的入口文件怎么配置，多入口文件怎么分割
* babel: transform-runtime以及state-2说说他们的作用
* webpack.optimize.UglifyJspluugin这个插件，有没有觉得很慢，有什么办法提升
* 有没有实现webpack loader 插件，及其他的原理介绍
* webpack 实现的原理和机制是怎么实现的
* bable 怎么把es6 转换为es5 的 有什么办法去研究

#### 模块的问题

commonjs amd cmd 的原理和区别


#### 安全方面的问题




#### 深拷贝实现的原理
JSON.string JSON.parse 的实现


#### 观察者模式和发布订阅区别

 1. 对于观察者模式的理解
 观察者模式： 一个对象（称为subject）维持一列依赖于它的对象（observer） 将有关状态的任何变动自动通知给他们观察者
 发布订阅： 基于一个主题/事件通道，希望接收通知的对象（subscriber）通过自定义事件订阅主题，被激活事件的对象（称为publisher）通过发布主题事件的范式被通知

 3. 两种模式之间的差异

 * Observer模式要求观察者必须订阅内容改变的事件，定义一个一对多的依赖关系
 * publish/subscribe 模式使用了一个主题/事件通道，这个通道结余订阅者和发布者之间
 * 观察者可以是被迫执行的，而发布订阅可以自定义
 * 观察者两个对象之间有很强的依赖关系， 发布订阅之间低耦合



#### RESTful

关键点 如何在互联网中使用软件，他是一种流行的互联网软件架构m


#### 中高级面试题

* 基础知识
    1. 简述浏览器的垃圾回收机制
    2. 简述浏览器的渲染过程
    3. 请比较MVC 和MVVM

* HTML 
    1. 简述一下对HTML语义化的理解
    2. 请介绍你用的HTML5 新特性
    3. 请对比实现浏览器内多个标签页之间的通信方式

* css
    1. 请谈谈你对盒模型的理解
    2. 请对比px rem em pt
    3. 谈谈你对浏览器兼容性问题的处理方式

* js
    * 请阐述你对闭包的理解
    * 请谈谈你是如何进行跨域处理的
    * 请简述你对js 事件的模型的认识

* vue
    * vue 生命周期的理解
    * Element UI
    * 如何实现不登录网站不能进行信息查询等操作

* 前端开发
    * 请对比你用过的js 库
    * 请比较commomjs AMD CMD 
    * 如何提高网页加载速度
    * 前端框架使用那些，请对比一下
    * 你是如何处理移动web 开发和PC 开发的差异的
    * HTTP 请求过程

* 主机网络
    * 请对比你用过的web 应用服务器
    * nginx 的负载均衡有哪些实现方式
    * HTTP 状态码

* 补充
    * 监听数组什么原理
    * 双向数据绑定
    * es6 的proxy 实现的优缺点
    *  模板解析
    * 虚拟dom
    * diff 算法
    * vuex 原理
    * 路由的实现
    * nextTick的实现 
    * keep-alive 的实现

