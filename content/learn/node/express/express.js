let http = require('http');
let methods = ['get', 'post', 'all'];
let url = require('url');

//  可以使用express 中间件来处理相同的逻辑
//  中间件特点：next 1. 决定是否向下执行， 2.req,res进行扩展（的属性） 3.常见的权限校验
function Application() {
    //  express 最常用的是向 req res 添加东西
    function app(req, res) {
        let method = req.method.toLowerCase();
        let { pathname, query } = url.parse(req.url, true);

        req.path = pathname;
        req.reqry = query;
        req.hostname = req.headers.host.split(':')[0];
        // 计数器
        index = 0;

        function next() {
            let layer = app.routes[index++];
            console.log(layer);
            console.log(req.path);

            //  没有路由错误
            if (layer) {
                // let { method: m, path, handler, params } = layer;
                //  中间件 把控制权交给用户
                if (layer.method === 'middle') {
                    // 中间件要匹配路径   1. /user  /user  2./user /  3. /user/b  /user
                    if (
                        layer.pathname === '/' ||
                        req.path === layer.pathname + '/' ||
                        req.path === layer.pathname
                    ) {
                        console.log(layer.method);
                        //  把控制交给了用户（实际上是吧next 给了用户）
                        return handler(req, res, next);
                    } else {
                        console.log(90);
                        next();
                    }
                } else {
                    // 非中间件

                    //  如果有参数的
                    if (layer.params) {
                        if (
                            layer.method === method &&
                            layer.reg.test(req.path)
                        ) {
                            // 匹配路径
                            // 提取参数，传给req
                            let [, ...args] = pathname.match(path);
                            req.params = params.reduce(
                                (momeo, key, index) => (
                                    (momeo[key] = args[index]), momeo
                                ),
                                {}
                            );
                            console.log(req.params);
                            return layer.handler(req, res);
                        }
                    }
                    console.log(90909);
                    if (
                        (layer.pathname === req.path ||
                            layer.pathname === '*') &&
                        (layer.method === method || layer.method === 'all')
                    ) {
                        return layer.handler(req, res);
                    }
                    next();
                }
            } else {
                res.end(`cannot ${pathname} ${method}`);
            }
        }
        //  首次执行
        next();
    }
    app.routes = [];
    // 批量生产各种方法
    methods.forEach(method => {
        app[method] = function(pathname, handler) {
            let layer = {
                method,
                pathname,
                handler
            };
            let key = [];
            //  如果包含是多参数路由
            if (pathname.includes(':')) {
                layer.reg = new RegExp(
                    pathname.replace(/(:([^\/])*)/g, function() {
                        key.push(arguments[1]);
                        return '([^/]*)';
                    })
                );
                layer.params = key;
            }
            app.routes.push(layer);
        };
    });
    // 中间件
    app.use = (pathname, handler) => {
        if (typeof handler !== 'function') {
            handler = pathname;
            pathname = '/';
        }
        let layer = {
            method: 'middle',
            pathname,
            handler
        };
        app.routes.push(layer);
    };
    app.all = function(pathname, handler) {
        let layer = {
            method: 'all', // 匹配所有的方法
            pathname,
            handler
        };
        app.routes.push(layer);
    };
    app.listen = function(...args) {
        let client = http.createServer(app);
        client.listen(...args);
    };
    return app;
}

module.exports = Application;
