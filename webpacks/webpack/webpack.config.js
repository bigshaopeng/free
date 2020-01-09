const path = require('path');
const webpack = require('./webpack');
const HtmlWebpackPlugin = require('./html-webpack-plugin');
const { CleanWebpackPlugin } = require('./clean-webpack-plugin');
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('./webpack');
// https://www.webpackjs.com/guides/asset-management/

module.exports = {
    // entry: './src/index.js',
    mode: 'production', // development | production | none
    entry: {
        // app: './src/index.js',
        // print: './src/print.js',
        app: './src/index.ts',
        // lo: './src/lo.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js'
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
        // publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: 'Output Manager' }),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({ name: 'common' }) // 指定公共 bundle 的名称。
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // {
            //     test: require.resolve('index.js'),
            //     use: 'imports-loader?this=>window'
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/,
            //     use: 'file-loader'
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
}
