let http = require('http');
let fs = require('fs');
let path = require('path');

http.createServer((req, res) => {
    let range = req.headers('range');
});
