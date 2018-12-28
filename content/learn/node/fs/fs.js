let fs = require('fs');
let path = require('path');
// 前使用 fs.stat() 检查文件是否存在
//  readdirSync 同步读取文件夹下的内容 fs.readdir 异步

// function removeDirSync(dir) {
//     let stateObj = fs.statSync(dir);
//     if (stateObj.isDirectory()) {
//         // 子目录
//         fs.readdirSync(dir).forEach(_ => {
//             let path = path.join(dir, _);
//             removeDirSync(path.join(path));
//         });
//         // 删除自己
//         fs.rmdirSync(dir);
//     } else {
//         fs.unlinkSync(dir);
//     }
// }

/**
 * 异步深度优先
 *
 * 异步操作需要回调
 *
 * @param {*} dir
 */
function removeDir(dir, callback) {
    let stateObj = fs.statSync(dir);
    if (stateObj.isDirectory()) {
        fs.readdir(dir, (err, files) => {
            let paths = files.map(_ => path.join(dir, _));
            console.log(paths);
            // 目录下的文件没有了
            function next(index) {
                if (index === paths.length) return fs.rmdir(dir, callback);
                //  当前操作目录
                let currentPath = paths[index];
                removeDir(currentPath, () => {
                    next(index + 1);
                });
            }
            next(0);
        });
    } else {
        fs.unlink(dir, callback);
    }
}
removeDir(path.join(__dirname, './a'), () => {
    console.log('remove success');
});
// fs.readdir(path.join(__dirname, '../../../js'), (err, files) => {
//     let pathstr = files.map(_ => path.join(__dirname, '../../../js/') + _);
//     console.log(pathstr);
// });
