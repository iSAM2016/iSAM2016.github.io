学习vue 源码顺便自己简单实现一个

1. 编写vue 实例的顺序
```
 // 接下来所有的操作都是在这个实例上添加方法
    initLifecycle(vm)  // lifecycle初始化
    initEvents(vm)     // events初始化 vm._events, 主要是提供vm实例上的$on/$emit/$off/$off等方法
    1 initRender(vm)     // 初始化渲染函数,在vm上绑定$createElement方法
    callHook(vm, 'beforeCreate')  // 钩子函数的执行, beforeCreate
    initInjections(vm) // resolve injections before data/props
    initState(vm)      // Observe data添加对data的监听, 将data转化为getters/setters
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created') // 钩子函数的执行, created
```