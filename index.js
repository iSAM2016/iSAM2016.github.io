let fs = require('fs');
// console.log(this);
// console.log(global);
// console.log(process.pid);
// console.log(process.cwd());
// console.log(global);
// process.stdout.wirte('hellow');
// console.log(window);
// let EventEmitter = require("events");
// let eve = new EventEmitter();
// let html = {};

// eve.on("ready", function(key, value) {
//   html[key] = value;
//   if (Object.keys(html).length === 1) {
//     console.log(html);
//   }
// });

// function render() {
//   fs.readFile("info.md", "utf8", function(err, template) {
//     eve.emit("ready", "template", template);
//   });
// }

// render();

/**
 *
 */
// let a = 1;
// let b = 3;

// function sum(a, b) {
//     return function () {
//         return a + b;
//     };
// }
// let total = sum(a, b);
// let c = total(0);
// 哨兵模式
// let after = function(times, callback) {
//   let result = {};
//   return function(key, value) {
//     result[key] = value;

//     if (Object.keys(result).length == times) {
//       callback(result);
//     }
//   };
// };

// let done = after(1, function(result) {
//   console.log(result);
// });

// function render() {
//   fs.readFile("info.md", "utf8", function(err, template) {
//     done("ready", template);
//   });
// }

// render();

function Cat() {}
let cat = new Cat();

// console.log(cat.__proto__ === Cat.prototype);
// console.log(Cat.prototype.constructor);
function fn1() {
    var a = (b = c = 1);
    console.log(c)
    var a = 1;
    b = 1;
    c = 1;
}
fn1();