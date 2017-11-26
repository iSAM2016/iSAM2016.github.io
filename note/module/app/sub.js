//我们这里使用CommonJS的风格
export {
    a
}
from './main.js';

function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    return element;
}

module.exports = {
    generateText
};