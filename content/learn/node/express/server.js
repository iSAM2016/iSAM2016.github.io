//  就是一个函数

let express = require('./express.js');

//  express 内置了路由中间件件

let app = express(); // app 是监听函数
console.log(app.listen);
//  方法=》 路由 =》 handle
app.get('/', function (req, res) {
    res.end('home');
});

app.post('/', function (req, res) {
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
let real = '/user/1/2';

path.replace(/:([^\/]*)/g, function () {
    param.push();
});