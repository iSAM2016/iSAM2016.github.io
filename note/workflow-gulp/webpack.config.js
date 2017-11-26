var path = require('path');
var webpack = require('webpack')
var srcDir = path.resolve(process.cwd(), 'src');

function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {};
    dirs.forEach(function(item) {
        matchs = item.match(/(.+)\.js$/);
        console.log(matchs);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    console.log(JSON.stringify(files));
    return files;
}

module.exports = {
    devtool: "source-map", //生成sourcemap,便于开发调
    entry: getEntry(),
    output: {
        path: path.join(__dirname, '/dest'),
        publicPath: './dest/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    //提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        // nie: "nie"
    }),
    //将公共代码抽离出来合并为一个文件
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
};