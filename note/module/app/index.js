import {
    generateText,
    a
} from './sub.js';

var app = document.createElement('div');
app.innerHTML = `<h1>Hello World</h1>${a}`;
app.appendChild(generateText());
document.body.appendChild(app);

var mod = require('./main.js');
console.log(mod.counter);
mod.incCounter();
console.log(mod.counter);