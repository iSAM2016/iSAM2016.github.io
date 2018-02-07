//function Vue(options: Object) {
function Vue(options) {
    //初始化一些配置
    this._init(options);
}

Vue.prototype._init = function(options) {
    this._traverse(options);
    this._coverdData(options);
}

let traverse = (domList) => {
    var domList = Array.prototype.slice.call(domList);
    if (Array.isArray(domList) && domList.length > 0) {
        domList.forEach((item) => {
            if (item.nodeType === 3 && item.nodeValue.trim() !== '') {
                // text node
                let content = item.nodeValue.trim(),
                    rgx = /^\{\{.*\}\}/;
                if (rgx.test(content)) {
                    //test text type
                    item.nodeValue = 123;
                } else {
                    throw Error('插值不符合规范');
                }
            } else {
                item.childNodes.length > 0 && traverse(item.childNodes);
            }
        })
    }
}

/**
 * begin to prepare DOM
 * @type {Object}
 */
Vue.prototype._traverse = (options) => {
    let element = document.getElementById(options.el);
    traverse(element.childNodes);
}

Vue.prototype._coverdData = () => {

}


let v = new Vue({
    el: 'app',
    data: {
        message: 'Hello Vue!',
        name: "isam2016",
        array: [1, 2, 3, {
            tody: 112
        }],
        object: {
            sex: '男',
            array: [3, 4, 5]
        },
    }
})