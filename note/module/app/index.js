//es6 加载 commonjs
/*import {
    generateText,
    a
} from './sub.js';*/

import {
    a,
    generateText
} from './sub.js';

const p = document.querySelector('.p');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    //只有触发事件才回家再对应的js 也就是异步加载 
    require.ensure([], function() {
        var mod = require('./main.js'); //???????????
        var C = mod.c;
        C.add();
        var data = C.show();
        p.innerHTML = data;
    })
})


/*var app = document.createElement('div');
app.innerHTML = `<h1>Hello World</h1>${a}`;
app.appendChild(generateText());
document.body.appendChild(app);*/