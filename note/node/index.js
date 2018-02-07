/**
 * app 跨域访问测试
 * @type {[type]}
 */
var express = require('express');
//Post方式请求参数放在请求体里面，需引用body-parser解析body  
var bodyParser = require("body-parser");
var app = express();
var request = require('request');

// 引用  
app.use(bodyParser.urlencoded({
    extended: false
}));

//设置跨域访问  
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//json数据  
var data = {
    "name": "iSAM2016",
    "age": "128901986@qq.com"
};

app.get('/', function(req, res) {
    request('http://m.ibs-bj.com/home/News/lists?catid=13&page=1&pageSize=10', function(error, response, body) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        res.end(body);
    });
    // console.log(req.query);
    /*  if (req.query && req.query.callback) {
          var str = req.query.callback + "(" + JSON.stringify(data) + ")"; //jsonp    
          //console.log('jsonp: ' + str);
          res.end(str);
      } else {
          //console.log('json: ' + JSON.stringify(data));
          res.end(JSON.stringify(data));
      }*/
});

app.listen(8085, function() {
    console.log('Listening on port 8085...');
});