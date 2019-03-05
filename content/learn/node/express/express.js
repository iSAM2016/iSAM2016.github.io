let http = require('http');
let methods = ['get', 'post'];
let url = require('url');

function Application() {
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