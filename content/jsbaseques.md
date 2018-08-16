# js 基本题目

1. js 堆栈溢出
[Javascript中递归造成的堆栈溢出及解决方案](http://www.zuojj.com/archives/1115.html)
下面的代码会造成堆栈溢出，怎么优化

```
function isEven (num) {
    if (num === 0) {
        return true;
    }

    if (num === 1) {
        return false;
    }

    return isEven(Math.abs(num) - 2);
}

//Outputs: true
console.log(isEven(10));

//Outputs: false
console.log(isEven(9));

```
首先搞清楚，堆栈溢出的原因。
每次在执行代码时候都会分配一定尺寸的栈空间，每次方法调用的时候都会在栈里存储一定信息（如参数，局部变量，返回值等等），这些信息再少也会占用一定的空间，成千上万个此类空间积累起来，自然就超过线程的栈空间了。
解决这个问题有两个思路：
* 异步
* 闭包

```
var  list  = readHugList();
var nextListItem = function(){
    var item = list.pop();
    if(item){
       setTimeout(nextListItem,0}
    }
}
```

**为什么使用setTimeout就可以解决问题？我们看下与没用之前的差别。如果没有使用setTimeout，那么函数将在大数据前不断的回调，直到最后走到重点，最初的函数才运行结束，释放内存。 但是如果使用了setTimeout，我们知道它是异步的，即使设置了时间为0，它也允许先执行下面的内容，可以释放堆栈，从而避免堆栈溢出的问题。 换言之，加了setTimeout，nextListItem函数被压入事件队列，函数可以退出，因此每次会清空调用堆栈。**


* 闭包

```
function isEven (num) {
    if (num === 0) {
        return true;
    }

    if (num === 1) {
        return false;
    }

    return function() {
        return isEven(Math.abs(num) - 2);
    }
}
//Outputs: true
console.log(isEven(4)()());
```

```
优化
function isEven (num) {
    if (num === 0) {
        return true;
    }

    if (num === 1) {
        return false;
    }

    return function() {
        return isEven(Math.abs(num) - 2);
    }
}

function trampoline (func, arg) {
    var value = func(arg);

    while(typeof value === "function") {
        value = value();
    }

    return value;
}
//Outputs: true
console.log(trampoline(isEven, 10000));

//Outputs: false
console.log(trampoline(isEven, 10001));
```

```
再次优化
function isEven(n) {
    /**
     * [isEvenInner 递归]
     * @param  {[type]}  num [description]
     * @return {Boolean}     [description]
     */
    function isEvenInner (n) {
        if (n === 0) {
            return true;
        }

        if (n === 1) {
            return false;
        }

        return function() {
            return isEvenInner(Math.abs(n) - 2);
        }
    }
    /**
     * [trampoline 迭代]
     * @param  {[type]} func [description]
     * @param  {[type]} arg  [description]
     * @return {[type]}      [description]
     */
    function trampoline (func, arg) {
        var value = func(arg);

        while(typeof value === "function") {
            value = value();
        }

        return value;
    }

    return trampoline.bind(null, isEvenInner)(n);
}
//Outputs: true
console.log(isEven(10000));

//Outputs: false
console.log(isEven(10001));
```


2.  object key 的属性

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

3. 变量提升

(function () {
    console.log(x)
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();


(function () {
    var x,y;  // 外部变量提升
    try {
        throw new Error();
    } catch (x/* 内部的x */) {
		x = 1; //内部的x，和上面声明的x不是一回事！！
         y = 2; //内部没有声明，作用域链向上找，外面的y
        console.log(x); //当然是1
    }
    console.log(x);  //只声明，未赋值，undefined
    console.log(y);  //就是2了
})();

4. 递归设计。 实现一个函数，给该函数一个DOM节点，函数访问其所有子元素(所有子元素，不仅仅是直接子元素)，每次访问子元素的时候，并为其传一个callback。

```
function Traverse(DOM, callback){
    callback(DOM)
    var list = DOM.children;
    Array.prototype.forEach.apply(list,(item)=>{
        Traverse(item,callback);
    })
}
```

5. 用setTimeout来实现setInterval
[](https://juejin.im/post/5b44a485e51d4519945fb6b7)

(1)用setTimeout()方法来模拟setInterval()与setInterval()之间的什么区别？
首先来看setInterval的缺陷，使用setInterval()创建的定时器确保了定时器代码规则地插入队列中。这个问题在于：如果定时器代码在代码再次添加到队列之前还没完成执行，结果就会导致定时器代码连续运行好几次。而之间没有间隔。不过幸运的是：javascript引擎足够聪明，能够避免这个问题。当且仅当没有该定时器的如何代码实例时，才会将定时器代码添加到队列中。这确保了定时器代码加入队列中最小的时间间隔为指定时间。
这种重复定时器的规则有两个问题：1.某些间隔会被跳过 2.多个定时器的代码执行时间可能会比预期小。
下面举例子说明：
假设，某个onclick事件处理程序使用啦setInterval()来设置了一个200ms的重复定时器。如果事件处理程序花了300ms多一点的时间完成。

6. js怎么控制一次加载一张图片，加载完后再加载下一张

方法一；
```

var iamge  = new Image();
obj.src="http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg";
obj.onload=function(){
    document.getElementById("mypic").innnerHTML="<img src='"+this.src+"' />";
}

```
方法二：
```
var obj=new Image();
obj.src="http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg";
obj.onreadystatechange=function(){
    if(this.readyState =='complete'){
        document.getElementById("mypic").innnerHTML="<img src='"+this.src+"' />";
    }
    }
}
```

7. 如何实现sleep的效果

```
function sleep(ms){
    return new Promise((res)=> setTimeout(resolive,ms)) 
}

async function test(){
    var tem  =  await sleep(1000);
    console.log(111)
    reutrn  tem;
} 
test();
```