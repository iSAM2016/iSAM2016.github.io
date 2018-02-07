webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sub = __webpack_require__(1);

var p = document.querySelector('.p');
var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    __webpack_require__.e/* require.ensure */(0).then((function () {
        var mod = __webpack_require__(2);
        var C = mod.c;
        C.add();
        var data = C.show();
        p.innerHTML = data;
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    return element;
}

module.exports = {
    generateText: generateText,
    a: 123
};

/***/ })
],[0]);