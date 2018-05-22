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