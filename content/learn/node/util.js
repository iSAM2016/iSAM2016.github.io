//  util 工具方法
let util = require("util");
// inherits (只继承公有方法 Object.setPrototypeof)  util.inspect == console.dir()
// promisify 他将一个接收回调函数参数的函数转换成为一个Promise的函数
// console.log(util.inherits);

const { promisify } = require("util");

const fs = require("fs");
const readFileAsync = promisify(fs.readFile);

readFileAsync("./index.js", { encoding: "utf8" })
  .then(text => {
    console.log(text);
  })
  .catch(() => {
    console.log("err");
  });
