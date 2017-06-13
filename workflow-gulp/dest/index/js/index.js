"use strict";

var _plugin = require("./plugin");

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*require.config({　　
    paths: {　　　　　　
        "jquery": "/public/js/lib/jquery/jquery",
    }　　
});　
require(['jquery', 'plugin'], function($, math) {　
    $('body').html('2323')　　　
    alert(math.add(1, 1));　　
});*/
alert(1);

//导入模块，其实是var Animal = require("./animal");与export想对应出现
var Dog = function (_Animal) {
    _inherits(Dog, _Animal);

    function Dog() {
        _classCallCheck(this, Dog);

        //执行一次父类的构造，否则会报错
        var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this));

        console.log("==constructor dog==");
        return _this;
    }

    return Dog;
}(_plugin2.default);

var dog = new Dog();
dog.sayHello();