#node

node 的瓶颈是 IO,该如何提高网络应用性能是关键

node 是基于事件的编程模型

[如何通过饿了么 Node.js 面试](https://elemefe.github.io/node-interview/#/sections/zh-cn/)
[Node.js 最佳实践](https://github.com/i0natan/nodebestpractices/blob/master/README.chinese.md)

进程— 资源分配的最小单位

线程— 程序执行的最小单位

事件循环： 当程序运行发生错误的时候回抛出异常，而异常又没有捕捉到，通常会导致程序退出

## 进程

1. 操作系统的进程
2. node.js 中的 process 对象
3.
