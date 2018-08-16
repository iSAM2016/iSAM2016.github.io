# promise 实现
[](https://juejin.im/post/5affc3976fb9a07aab2a1dc6)
```
function Promise(callback){
    var self = this;
    self.status = 'PENDING';// 开始状态
    self.data = undefined;
    self.onResolvedCallback = [] //resolve 回调的结果
    self.onRejectedCallback = [] //reject 回调
    callback(resolve,reject)//执行executor 病传入想想的参数
    
    function resolve(value){
        if (self.status === 'PENDING'){
            self.status == 'FULFILLED';// 成功转态
            self.data = value;
             // 依次执行成功之后的函数栈
            for(var i = 0; i < self.onResolvedCallback.length; i++) {
                self.onResolvedCallback[i](value)
            }
        }
        
    }
    function reject(error) {
        if(self.status === 'PENDING'){
            self.status == 'REJECTED',
            self.data = error
              // 依次执行失败之后的函数栈
           for(var i = 0; i < self.onRejectedCallback.length; i++) {
               self.onRejectedCallback[i](error)
            }

        }
        
    }

}

// then 
Promise.prototype.then = function(){
    
}

new Promise((res,rej)=>{
   res(s);
}).then((data)=>{
    console.log(data)
})

```
https://juejin.im/post/5afe6d3bf265da0b9e654c4b?utm_source=gold_browser_extension