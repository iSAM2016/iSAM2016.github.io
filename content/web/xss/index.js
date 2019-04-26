let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../../')));

// create application/x-www-form-urlencoded parser
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

let userList = [{
        username: 'admin',
        password: 'admin'
    },
    {
        username: 'root',
        password: 'root'
    }
];

let SESSION_ID = 'connect.sid';

app.post('/api/login', function (req, res) {
    let {
        username,
        password
    } = req.body;
    let user = userList.find(
        user => user.username === username && user.password === password
    );
    if (user) {
        let cardId = Math.random() + Date.now();
        res.cookie(SESSION_ID, cardId);
        res.json({
            code: 0
        })
    } else {
        res.json({
            code: 0,
            error: '用户不存在'
        })
    }
});
app.get('/welcome', function (req, res) {
    /****
     * 反射型 xss-form
     */
    // res.send(`${req.query.type}`);
    res.send(`${encodeURIComponent(req.query.type)}`);

})
let comment = [{
    username: 'isam2016',
    connect: "content"
}]
app.get('/api/list', function (req, res) {
    res.json({
        code: 0,
        comment
    })
})

app.post('/api/addComment', function (req, res) {
    if (true) {
        //  登陆过
        comment.push({
            connect: req.body.content
        })
        res.json({
            code: 0
        })
    }
})



app.listen(3000);