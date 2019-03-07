let str1 = '珠峰2017你好2018';
let str2 = '2017j2018';


var reg = /\d+/; // 如果没有修饰符，则表示包含 某某某 即可
var reg = /^\d+/;
var reg = /^\d+$/; //  ^和$ 只是一个修饰或者声明，不会占据字符串的位置

console.log(reg.test(str2))

/**  
 * / 
 */
// . 匹配的是 除\n 之外的任意字符
var reg = /^2.3$/;

console.log(reg.test('2.3')); // => true
console.log(reg.test('2+3')); // => true

var reg = /^2\.3$/;
console.log(reg.test('2+3')); // => false

// \\d 同时出现会变成  \\
// 正则里面是不允许一个 \ 出现 例如 ‘\’
var reg = /^\\\d$/;
console.log(reg.test('\\9')) // => true

var reg = /^\\d$/;
console.log(reg.test('\\d')) // => true
console.log(reg.test('\\9')) // => false

/**
 *会匹配很多
 * 18 或 19
 * 以 1 开头以 9 结尾 中间是 8或 1
 * 以 18 开头或者19 结尾即可   
 */
var reg = /^18|19$/;

var reg = /^(18|19)$/;

console.log(reg.test('1919')) // => false
console.log(reg.test('1818')) // => false
console.log(reg.test('181')) // => false
console.log(reg.test('1819')) // => false

/**
 * ()
 * 改变默认的优先级
 * 分组引用 \1 \2
 * 分组捕获
 */
var reg = /^([a-z])([a-z])\1([a-z])$/;
console.log(reg.test('hthp')) // => true

var reg = /^([a-z])([a-z])\2([a-z])$/;
console.log(reg.test('http')) // => true

/**
 * []
 * [xyz][^xyz][a-z][^a-z]
 * 
 */
var reg = /^[a-zA-Z0-9_]$/ // => \w
// 中括号中出现的元字符，一般都代表本身的含义

var reg = /^[.?+&]+&/; // 中括号里面代表四个元字符都是本身含义

//  类名 
var reg = /^[\w][\w-]*$/;

console.log(reg.test('t'))

/**op
 * 验证18-65 之前的年龄
 * 
 * 分阶段
 * 
 * var  reg = /^[18-65]$/; => 1 或者 8-6 或者 5
 * 小括号在中括号中失效
 * 
 * 1 18-19
 * 2 20-59
 * 3 60-65
 */


var reg = /^((18|19)|([2-5]\d)|(6[0-5]))$/

console.log(reg.test(17))