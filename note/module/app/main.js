// mian.js
// 通过 require() 来导入 foo.js 模块
/*var bar = require('./foo')
console.log(bar); // Object
console.log(bar.variable); // 8
console.log(bar.sum(1)); // 7
console.log(bar.square(5)); // 25*/
/*function C() {
    this.sum = 0;
    this.add = function() {
        this.sum += 1;
    };
    this.show = function() {
        console.log(this.sum);
    };
}

export let c = new C();*/
var counter = 3;

function incCounter() {
    counter++;
}
module.exports = {
    counter: counter,
    incCounter: incCounter,
};