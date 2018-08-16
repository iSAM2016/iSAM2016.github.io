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
