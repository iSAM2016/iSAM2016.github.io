(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var variable = 8;
var sum = function sum(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    return a + b;
};
var square = function square(b) {
    return b * b;
};
module.exports.variable = variable;
module.exports.sum = sum;
module.exports.square = square;

},{}],2:[function(require,module,exports){
'use strict';

// mian.js
// 通过 require() 来导入 foo.js 模块
var bar = require('../foo');
console.log(bar); // Object
console.log(bar.variable); // 8
console.log(bar.sum(1)); // 7
console.log(bar.square(5)); // 25

},{"../foo":1}]},{},[2])

//# sourceMappingURL=bundle.js.map
