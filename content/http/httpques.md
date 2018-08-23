# http、html和浏览器篇

1. [HTTP返回码中301与302的区别](https://blog.csdn.net/qmhball/article/details/7838989)

## 跨域

[解决跨域](https://github.com/hijiangtao/hijiangtao.github.io/blob/master/_posts/2017-06-13-Cross-Origin-Resource-Sharing-Solutions.md)


## http和https 
>https的ssl 加密是在传输层实现的

##### 1.http和https的基本概念

http: 超文本传输协议，是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。

https: 是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。

https协议的主要作用是：建立一个信息安全通道，来确保数组的传输，确保网站的真实性。

##### 2.http和https的区别？

http传输的数据都是未加密的，也就是明文的，网景公司设置了SSL协议来对http协议传输的数据进行加密处理，简单来说https协议是由http和ssl协议构建的可进行加密传输和身份认证的网络协议，比http协议的安全性更高。

主要的区别如下：

* Https协议需要ca证书，费用较高。
* http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
* 使用不同的链接方式，端口也不同，一般而言，http协议的端口为80，https的端口为443
* http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

##### 3.https协议的工作原理

客户端在使用HTTPS方式与Web服务器通信时有以下几个步骤，如图所示。

* 客户使用https url访问服务器，则要求web 服务器建立ssl链接。
* web服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或者说传输给客户端。
* 客户端和web服务器端开始协商SSL链接的安全等级，也就是加密等级。
* 客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。
* web服务器通过自己的私钥解密出会话密钥。
* web服务器通过会话密钥加密与客户端之间的通信。

##### 4.https协议的优点

* 使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；
* HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。
* HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。
* 谷歌曾在2014年8月份调整搜索引擎算法，并称“比起同等HTTP网站，采用HTTPS加密的网站在搜索结果中的排名将会更高”。

##### (5)https协议的缺点

* https握手阶段比较费时，会使页面加载时间延长50%，增加10%~20%的耗电。
* https缓存不如http高效，会增加数据开销。
* SSL证书也需要钱，功能越强大的证书费用越高。
* SSL证书需要绑定IP，不能再同一个ip上绑定多个域名，ipv4资源支持不了这种消耗。

### tcp三次握手，一句话概括
客户端和服务端都需要直到各自可收发，因此需要三次握手。
简化三次握手：

从图片可以得到三次握手可以简化为：C发起请求连接S确认，也发起连接C确认我们再看看每次握手的作用：

* 第一次握手：S只可以确认 自己可以接受C发送的报文段
* 第二次握手：C可以确认 S收到了自己发送的报文段，并且可以确认 自己可以接受S发送的报文段第
* 三次握手：S可以确认 C收到了自己发送的报文段

### TCP和UDP的区别

* (1）TCP是面向连接的，udp是无连接的即发送数据前不需要先建立链接。
* (2)TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保证可靠交付。 并且因为tcp可靠，面向连接，不会丢失数据因此适合大数据量的交换。
* (3)TCP是面向字节流，UDP面向报文，并且网络出现拥塞不会使得发送速率降低因会出现丢包，对实时的应用比如IP电话和视频会议等）。
* (4)TCP只能是1对1的，UDP支持1对1,1对多。
* (5)TCP的首部较大为20字节，而UDP只有8字节。
* (6)TCP是面向连接的可靠性传输，而UDP是不可靠的。

###.WebSocket的实现和应用

1. 什么是WebSocket?

WebSocket是HTML5中的协议，支持持久连续，http协议不支持持久性连接。Http1.0和HTTP1.1都不支持持久性的链接，HTTP1.1中的keep-alive，将多个http请求合并为1个

2. WebSocket是什么样的协议，具体有什么优点？

HTTP的生命周期通过Request来界定，也就是Request一个Response，那么在Http1.0协议中，这次Http请求就结束了。在Http1.1中进行了改进，是的有一个connection：Keep-alive，也就是说，在一个Http连接中，可以发送多个Request，接收多个Response。但是必须记住，在Http中一个Request只能对应有一个Response，而且这个Response是被动的，不能主动发起。

WebSocket是基于Http协议的，或者说借用了Http协议来完成一部分握手，在握手阶段与Http是相同的。我们来看一个websocket握手协议的实现，基本是2个属性，upgrade，connection。

基本请求如下：
```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```


多了下面2个属性：

```
Upgrade:webSocket
Connection:Upgrade
告诉服务器发送的是websocket
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

###.HTTP请求的方式，HEAD方式

head：类似于get请求，只不过返回的响应中没有具体的内容，用户获取报头

options：允许客户端查看服务器的性能，比如说服务器支持的请求方式等等。

### 一个图片url访问后直接下载怎样实现？

请求的返回头里面，用于浏览器解析的重要参数就是OSS的API文档里面的返回http头，决定用户下载行为的参数。
下载的情况下：
```
  1. x-oss-object-type:
         Normal
  2. x-oss-request-id:
         598D5ED34F29D01FE2925F41
  3. x-oss-storage-class:
         Standard
```
