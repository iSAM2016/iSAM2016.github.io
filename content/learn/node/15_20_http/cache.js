let http = require("http");
let url = require("url");
const path = require('path');
let fs = require('fs')
const {
    promisify
} = require("util");
let stat = promisify(fs.stat);
let server = http.createServer(async (req, res) => {
    try {

        let {
            pathname,
            query
        } = url.parse(req.url, true);

        let realPath = path.join(__dirname, "public", pathname);
        console.log(realPath)
        let statObj = await stat(realPath);
        console.log(statObj.isDirectory())
        if (statObj.isDirectory()) {
            //   文件夹
            let p = path.join(realPath, "index.html");
            await stat(p);
            fs.createReadStream(p).pipe(res);
        } else {
            console.log('fle')
            // 文件，读取对应的文件直接返回即可
            fs.createReadStream(realPath).pipe(res);
        }
    } catch (error) {
        //  没有找到文件
        res.statusCode = 404;
        res.end("not foud");
    }
});

server.listen(3000);