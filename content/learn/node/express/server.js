//  就是一个函数

let express = require('./express.js');

//  express 内置了路由中间件件

let app = express(); // app 是监听函数
console.log(app.listen)
//  方法=》 路由 =》 handle
app.get('/', function (req, res) {
    res.end('home');
});

app.post('/', function (req, res) {
    res.end('post home');
});
app.listen(3000);