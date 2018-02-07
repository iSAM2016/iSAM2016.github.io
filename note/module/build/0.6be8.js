webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var bar = __webpack_require__(3);
console.log(bar);
console.log(bar.variable);
console.log(bar.sum(1));
console.log(bar.square(5));
function C() {
    this.sum = 0;
    this.add = function () {
        this.sum += 1;
    };
    this.show = function () {
        return this.sum;
    };
}

var c = exports.c = new C();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ })
]);