　　
import Animal from "./plugin"//导入模块，其实是var Animal = require("./animal");与export想对应出现
class Dog extends Animal{
  constructor(){
    super();//执行一次父类的构造，否则会报错
    console.log("==constructor dog==");
  }
}

var dog = new Dog();
dog.sayHello();