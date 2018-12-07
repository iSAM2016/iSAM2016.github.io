let fs = require('fs');
let path = require('path');
let access = promisify(fs.access);
let mkdir = promisify(fs.mkdir)
// 同步是async
let r = fs.readFileSync(path.join(__dirname, 'util.js'), {
    encoding: 'utf8',
    flag: 'r'
});
// 异步
fs.readFile(path.join(__dirname, 'util.js'), 'utf8', function (err, data) {
    // console.log(data)
});

//写文件
// 写文件会是以二进制的形式写入
fs.writeFile(path.join(__dirname, 'test.js'), '{data: 1}', function (err) {
    // console.log('succes');
});
/**
 *  递归实现
 * @param {} p 
 */
// function mdkir(p, callback) {
//     let paths = p.split('/');
//     let index = 0;
//     function next() {
//         if (index === paths.length) {
//             callback();
//             return false;
//         }
//         let realPath = paths.slice(0, ++index).join('/');
//         fs.mkdir(realPath, function(er) {
//             next();
//         });
//     }
//     next();
// }

/**
 * 创建文件夹 async 实现
 * @param {} p
 */
async function mkdir(p) {
    let paths = p.split('/');
    for (let i = 0; i <= paths.length; i++) {
        let realPath = paths.slice(0, i + 1).join('/');
        try {
            await access(realPath);
        } catch (e) {
            await mkdir(realPath);
        }
    }
}

// mkdir('e/d/c').then(function () {
//     console.log('suces');
// });

/**
 * 删除文件夹
 * 先顺广度便利 算法
 */
function rmdirsync(dir) {
    let arr = [dir];
    let current = null; // 当前项
    let index = 0; // 第一项
    while (current = arr[index++]) {
        let dirpath = fs.readdirSync(current);
        arr = [...arr, ...dirpath];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        fs.rmdirSync(arr[i]);
    }
}

rmdirsync('e')