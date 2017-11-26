//导入封装的回调函数
require("./lib.js"); //导入模块，

class Dog extends Animal {
    constructor() {
        super(); //执行一次父类的构造，否则会报错
        console.log("==constructor dog==");
    }
}

var dog = new Dog();
dog.sayHello();

/*console.log(obj.deleteAllItem())*/