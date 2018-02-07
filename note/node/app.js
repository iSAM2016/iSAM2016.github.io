/**
 * 爬虫
 */

var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res) {

    request('https://www.quora.com/What-is-the-most-emotional-picture-youve-ever-seen', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            var t = $('#app').text()

            res.json(body);
        }
    })
});

var server = app.listen(3000, function() {
    console.log('listening at 3000');
});