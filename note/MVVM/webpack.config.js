var path = require("path");
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
module.exports = {
    entry: {
        app: ["./src/main.js"]
    },
    output: {

        filename: "bundle.js"
    },
    // 这里是我们新添加的处理不同类型文件需要的 Loader
    module: {

        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: APP_PATH,
            exclude: /node_modules/
        }, {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }]
    },

    devServer: {
        compress: true, // 让 dev－server 启动 gzip压缩
        hot: true, // 让 dev－server 启动 HMR 功能
    },
    // 添加 plugin 的配置选项
    plugins: [
        new HtmlWebpackPlugin({
            title: 'mvvm',
            filename: 'index.html',
            template: 'index.html',
            /*inject: true*/
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};