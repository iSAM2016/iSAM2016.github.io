//  就是一个函数

let express = require('./express.js');

//  express 内置了路由中间件件

let app = express(); // app 是监听函数
console.log(app.listen);
//  方法=》 路由 =》 handle
app.get('/test', function (req, res) {
    res.end('home');
});

app.get('/test', function (req, res) {
    res.end('home');
});

app.post('/user/:name/:id', function (req, res) {
    res.end('post home');
});
//  路径参数路由， 在路径参数 /user/:name/:id  => /user/1/2 => {name:1,id:2} => req.params
app.get('user/:name/:id', function (req, res) {
    req.end(JSON.stringify(req.params));
});
// app.all('*', function (req, res) {
//     res.end('post home');
// });
app.listen(3000);

let path = 'user/:name/:id';
let realPath = '/user/1/2';
let param = []

let regstr = path.replace(/:([^\/]*)/g, function (match, part1) {
    param.push(arguments[1]);
    return '([^\/]*)'
});

let reg = new RegExp(regstr)
let [, ...args] = realPath.match(reg);
console.log(reg)
console.log(param)
console.log(args)

let source = param.reduce((memo, key, index) => {
    memo[key] = args[index];
    return memo
}, {})

console.log(source)