### 框架
Proxy 与 Obeject.defineProperty 对比
Obeject.defineProperty 虽然已经能够实现双向绑定了，但是他还是有缺陷的。

只能对属性进行数据劫持，所以需要深度遍历整个对象
对于数组不能监听到数据的变化

虽然 Vue 中确实能检测到数组数据的变化，但是其实是使用了 hack 的办法，并且也是有缺陷的。

Proxy不会原生支持对对象的监听


### 父子组件之间的通话
Vue

父子组件用Props通信
非父子组件用Event Bus通信
如果项目够复杂,可能需要Vuex等全局状态管理库通信
$dispatch(已经废除)和$broadcast(已经废除)

React

父子组件,父->子直接用Props,子->父用callback回调
非父子组件,用发布订阅模式的Event模块
项目复杂的话用Redux、Mobx等全局状态管理管库
用新的Context Api



#### 路由

* 实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？
    * history.pushState(state,title, url)

* 对前端路由的理解？前后端路由的区别？
    * [前端路由与后端路由](https://blog.csdn.net/gongzhuxiaoxin/article/details/52718298)
    * onhashchange 事件
    * historyAPI 


Vue双向数据绑定：xs
我所理解的双向数据绑定无非就是在单向数据绑定的基础上给可输入元素，比如input和textarea添加监听事件来动态修改model和view，其最核心的方法就是通过Object.defineProperty()来实现对对属性的劫持，达到监听数据变化的目的。
要实现mvvm双向数据版绑定， 我觉得需要实现以下几点：
1.实现一个数据监听器Observer,能够对数据对象的所有属性进行监听，如有变动可以拿到最新值并通知订阅者。
2.实现一个指令解析器Compiler，对每个元素节点的指令扫描并解析，根据指令模板替换数据，并且绑定相应的更新函数。
3.实现一个watcher，其作为连接Observer和Compiler的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的回调函数从而更新视图
4.MVVM作为入口函数，整个以上三者



### 文章
[不好意思！耽误你的十分钟，让MVVM原理还给你](https://juejin.im/post/5abdd6f6f265da23793c4458?utm_source=gold_browser_extension)
[【大型干货】手拉手带你过一遍vue部分源码](https://juejin.im/post/5adff30f518825672d33d596?utm_source=gold_browser_extension)
[实现双向绑定Proxy比defineproperty优劣如何?](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)