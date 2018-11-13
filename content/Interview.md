# HTTP

1. [HTTP返回码中301与302的区别](https://blog.csdn.net/qmhball/article/details/7838989)

### 跨域

[解决跨域](https://github.com/hijiangtao/hijiangtao.github.io/blob/master/_posts/2017-06-13-Cross-Origin-Resource-Sharing-Solutions.md)


1. 什么是无头浏览器 他的作用是啥
2. https 抓包原理是什么 如何抓包

3. 重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。
    1. 重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘
    2. 回流是布局或者几何属性需要改变就称为回流。

回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。
所以以下几个动作可能会导致性能问题：
- 改变 window 大小
- 改变字体
- 添加或删除样式
- 文字改变
- 定位或者浮动
- 盒模型

很多人不知道的是，重绘和回流其实和 Event loop 有关。
- 当 Event loop 执行完 Microtasks 后，会判断 document 是否需要更新。因为浏览器是 60Hz 的刷新率，每 16ms 才会更新一次。
- 然后判断是否有 resize 或者 scroll ，有的话会去触发事件，所以 resize 和 scroll 事件也是至少 16ms 才会触发一次，并且自带节流功能。
- 判断是否触发了 media query
- 更新动画并且发送事件
- 判断是否有全屏操作事件
- 执行 requestAnimationFrame 回调
- 执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
- 更新界面
- 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback 回调。
少重绘和回流
使用 translate 替代 top

<div class="test"></div>
<style>
	.test {
		position: absolute;
		top: 10px;
		width: 100px;
		height: 100px;
		background: red;
	}
</style>
<script>
	setTimeout(() => {
        // 引起回流
		document.querySelector('.test').style.top = '100px'
	}, 1000)
</script>

- 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
- 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
- CSS 选择符从右往左匹配查找，避免 DOM 深度过深
- 将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video 标签，浏览器会自动将该节点变为图层。

4. 今日面试题
    1. 什么是重绘（Repaint）和回流（Reflow）？
    2. 哪些动作可能会导致重绘（Repaint）和回流（Reflow）的发生？
    3. 重绘（Repaint）和回流（Reflow）和Event loop的关系？
    4. 如何减少重绘（Repaint）和回流（Reflow）？

5. 请说说浏览器事件机制中事件触发三个阶段
事件触发三阶段
事件触发有三个阶段
document 往事件触发处传播，遇到注册的捕获事件会触发
传播到事件触发处时触发注册的事件
从事件触发处往 document 传播，遇到注册的冒泡事件会触发
事件触发一般来说会按照上面的顺序进行，但是也有特例，如果给一个目标节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行。

// 以下会先打印冒泡然后是捕获
node.addEventListener('click',(event) =>{
	console.log('冒泡')
},false);
node.addEventListener('click',(event) =>{
	console.log('捕获 ')
},true)

注册事件
通常我们使用 addEventListener 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 useCapture 参数来说，该参数默认值为 false 。useCapture 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性
capture，布尔值，和 useCapture 作用一样
once，布尔值，值为 true 表示该回调只会调用一次，调用后会移除监听
passive，布尔值，表示永远不会调用 preventDefault
一般来说，我们只希望事件只触发在目标上，这时候可以使用 stopPropagation 来阻止事件的进一步传播。通常我们认为 stopPropagation 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。stopImmediatePropagation 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。

node.addEventListener('click',(event) =>{
	event.stopImmediatePropagation()
	console.log('冒泡')
},false);
// 点击 node 只会执行上面的函数，该函数不会执行
node.addEventListener('click',(event) => {
	console.log('捕获 ')
},true)

事件代理
如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上
<ul id="ul">
	<li>1</li>
    <li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
</ul>
<script>
	let ul = document.querySelector('##ul')
	ul.addEventListener('click', (event) => {
		console.log(event.target);
	})
</script>

7 请说说在hybrid 端实现类似原生版流畅的体验要注意的事情


8.如果发现在某个用户的电脑上，网站的静态资源打不开了，如何确定是CDN的问题还是那个用户机器、浏览器的问题？ 

9.crsf 冲击是什么 如何防范

CSRF
跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。[1] 跟跨網站指令碼（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。
简单点说，CSRF 就是利用用户的登录态发起恶意请求。
如果接口是 Post 提交的，就相对麻烦点，需要用表单来提交接口


如何防御
防范 CSRF 可以遵循以下几种规则：
Get 请求不对数据进行修改
不让第三方网站访问到用户 Cookie
阻止第三方网站请求接口
请求时附带验证信息，比如验证码或者 token
#SameSite
可以对 Cookie 设置 SameSite 属性。该属性设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。
#验证 Referer
对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。
#Token
服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。


10 xss 是什么如何攻击 如何防御

XSS
跨网站指令码（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程式的安全漏洞攻击，是代码注入的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。
XSS 分为三种：反射型，存储型和 DOM-based
我的手机  12:34:21
如何攻击
XSS 通过修改 HTML 节点或者执行 JS 代码来攻击网站。
例如通过 URL 获取某些参数


                                         
上述 URL 输入可能会将 HTML 改为 <div><script>alert(1)</script></div> ，这样页面中就凭空多了一段可执行脚本。这种攻击类型是反射型攻击，也可以说是 DOM-based 攻击。
也有另一种场景，比如写了一篇包含攻击代码 <script>alert(1)</script> 的文章，那么可能浏览文章的用户都会被攻击到。这种攻击类型是存储型攻击，也可以说是 DOM-based 攻击，并且这种攻击打击面更广。
以上示例使用了 js-xss 来实现。可以看到在输出中保留了 h1 标签且过滤了 script 标签

对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。


只允许加载 HTTPS 协议图片


https://content-security-policy.com/
https://eggjs.org/zh-cn/core/security.html



防抖
你是否在日常开发中遇到一个问题，在滚动事件中需要做个复杂计算或者实现一个按钮的防二次点击操作。
这些需求都可以通过函数防抖动来实现。尤其是第一个需求，如果在频繁的事件回调中做复杂计算，很有可能导致页面卡顿，不如将多次计算合并为一次计算，只在一个精确点做操作。因为防抖动的轮子很多，这里也不重新自己造个轮子了，直接使用 underscore 的源码来解释防抖动。
我的手机  12:37:25
整体函数实现的不难，总结一下。
对于按钮防点击来说的实现：一旦我开始一个定时器，只要我定时器还在，不管你怎么点击都不会执行回调函数。一旦定时器结束并设置为 null，就可以再次点击了。
对于延时执行函数来说的实现：每次调用防抖动函数都会判断本次调用和之前的时间间隔，如果小于需要的时间间隔，就会重新创建一个定时器，并且定时器的延时为设定时间减去之前的时间间隔。一旦时间到了，就会执行相应的回调函数。


12.一个单页面应用，有6张页面，F、E、A、B、C、D。 页面ABCD构成了一个冗长的用户验证过程。目前A、B、C对应用户验证过程的第1步，第2步，第3步。 页面F是首页，E是某张业务相关页面。用户到达页面E后，系统发现用户没有认证，触发验证流程，到达页面A，然后开始A->B->C->D流程。 页面D是验证结果页面（验证成功页面）。 请问，如果到达页面D后，如何让用户点击返回可以返回页面F，而忽略中间流程（注：用户可能根本没有到达过F，比如微信分享直接进入了E）。
补充下： 场景是上述场景，最好能做到到达页面D后，浏览器自然返回是F，再按返回，单页面系统退出；另外请思考下各个流程如何实现流畅切换，不会有中间闪烁的页面。


 这个问题初一看是对单页面路由架构的考察。也是一个很好的引入问题，可以考察非常多方面。 比如说：如何实现页面切换动画？ A、B、C都是表单的话，如何缓存用户输入完成的表单数据？……回到问题，因为history api提供了push/pop/replace三种操作，无论是其中的任何一种都无法实现上述的效果。 一个路由系统，首先要监听浏览器地址的变化，然后根据变化渲染不同的页面。1. 在页面到达D后，关闭对路由变化页面渲染的监听。 2. 路由系统要进行多次POP，可以用history.go(-n)实现； 3. 路由栈清空到只剩下一张页面时，将这张页面替换为F。 4. PUSH一张页面D。 5. 如果在HTML上有一个类似「轮播图」的设计，就是每一张页面是一张轮播图，将轮播图设置成只有「F」和「D」。 5. 恢复路由监听。 这个问题的另一个考点是，在上述完整的计算过程当中，需要知道当前历史记录中的页面数，页面数可以通过localStorage实现，在ls中维护一个变量，每次push的时候+1，并写入history.state。 POP的时候读取history.state将变量重置。


18 如何计较两个颜色的相似度

今天题目参考答案
这是一道开放题目，首先将颜色拆分成r/g/b三个值，如果是字符串的颜色如#aabbff或者rgb(255,128,100)可以用正则表达式取出对应的r/g/b值。对于16进制字符串，可以使用parseInt('0xaa')转10进制整数。然后对于两个颜色，可以使用距离 Math.sqrt( (r1-r2) *(r1-r2) +(g1-g2)*(g1-g2)+(b1-b2)*(b1-b2) )进行比较， 距离近则相似。 当然可以用Math.hypot( r1-r2, g1-t2, b1-b2) 来简化上述运算。
这道题目主要考察学员的知识积累和思考。 首先要知道rgb是颜色的组成。 然后要给出一种可行的比较方法。 最后要考察具体javascript细节函数的运用。