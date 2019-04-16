//  就是一个函数

let express = require('./express.js');

//  express 内置了路由中间件件
// 中间件一般放在路由的上边



let app = express(); // app 是监听函数
// app.use('/', function (req, res, next) {
//     console.log('123');
//     next();
// })


// app.use('/2', function (req, res, next) {
//     console.log('676');

// })

//  方法=》 路由 =》 handle
app.get('/test', function (req, res) {
    res.end('hom00e');
});

// app.post('/user/:name/:id', function (req, res) {
//     res.end('post home');
// });
// //  路径参数路由， 在路径参数 /user/:name/:id  => /user/1/2 => {name:1,id:2} => req.params
// app.get('user/:name/:id', function (req, res) {
//     res.end(JSON.stringify(req.params));
// });
// app.all('*', function (req, res) {
//     res.end('post home');
// });
app.listen(3000);