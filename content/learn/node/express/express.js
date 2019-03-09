let http = require('http');
let methods = ['get', 'post'];
let url = require('url');

//  可以使用express 中间件来处理相同的逻辑
//  中间件特点： 决定是否向下执行， 扩展req,res 的属性 常见的权限校验
function Application() {
    //  express 最常用的是向 req res 添加东西
    function app(req, res) {
        let method = req.method.toLowerCase();
        let {
            pathname,
            query
        } = url.parse(req.url, true)

        req.path = pathname
        req.reqry = query;
        req.hostname = req.headers.host.split(':')[0];


        for (let i = 0; i < app.routes.length; i++) {
            let layer = app.routes[i];
            if (layer.params.length > 1) {
                if (layer.pathname.test(pathname)) {
                    // 匹配路径
                    let [, ...args] = pathname.match(layer.pathname)
                    req.params = layer.params.reduce((momeo, key, index) => (momeo[key] = args[index], momeo), {})
                    console.log(req.params)
                    return layer.handler(req, res)
                }

            }
            if (layer.pathname === req.path && layer.method === method) {
                return layer.handler(req, res)
            }

        }
        res.end(`cannot ${pathname} ${method}`)


    }
    app.routes = []
    // 批量生产各种方法
    methods.forEach(method => {
        app[method] = function (pathname, handler) {
            let layer = {
                method,
                pathname,
                handler
            }
            layer.params = [];
            //  如果包含是多参数路由 
            if (pathname.includes(':')) {
                layer.pathname = new RegExp(pathname.replace(/(:([^\/])*)/g, function () {
                    layer.params.push(arguments[1]);
                    return '([^\/]*)'
                }))
            }
            app.routes.push(layer);
        }
    })
    app.listen = function (...args) {
        let client = http.createServer(app);
        client.listen(...args);
    }
    return app;
}

module.exports = Application