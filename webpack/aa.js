const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production', // production || development || none
    target: 'node', // node || web 默认是web

    // entry string || object || array
    // entry: './path/to/my/entry/file.js',

    // 单个入口语法--简写
    // entry: {
    //     main: './path/to/my/entry/file.js',
    // },

    // 对象语法
    // entry: {
    //     app: './src/app.js', // 应用程序入口
    //     vendors: './src/vendors.js', // 第三方入口
    // },

    // 多页面应用程序
    // entry: {
    //     pageOne: './src/pageOne/index.js',
    //     pageTwo: './src/pageTwo/index.js',
    //     pageThree: './src/pageThree/index.js'
    // },

    // 此配置将 bundle.js 输出到指定路径
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // },

    // 多个入口起点
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: '',
    },

    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
        ]
    },
    pluglins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}
