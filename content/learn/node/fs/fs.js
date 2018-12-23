let fs = require('fs');
let path = require('path');
// 前使用 fs.stat() 检查文件是否存在
//  readdirSync 读取文件夹下的内容

// fs
// r

// 删除一个文件夹要读取文件夹内容，fs.readdir

function removeDirSync(path) {
    let stateObj = fs.statSync(path);
    if (stateObj.isDirectory) {
        // 目录
        fs.readdirSync.forEach(_ => {
            removeDirSync(path.join(__dirname, _));
        });
    } else {
    }
}

// fs.readdir(path.join(__dirname, '../../../js'), (err, files) => {
//     let pathstr = files.map(_ => path.join(__dirname, '../../../js/') + _);
//     console.log(pathstr);
// });
