const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].zsp.js',
        path: __dirname + '/dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: 'hello 2' }),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin()
    ]
}


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');

// module.exports = {
//     entry: {
//         app: './src/index.js'
//     },
//     devtool: 'inline-source-map',
//     devServer: {
//         contentBase: './dist',
//         hot: true
//     },
//     plugins: [
//         new CleanWebpackPlugin(['dist']),
//         new HtmlWebpackPlugin({ title: 'Hot Module Replacement' }),
//         new NamedModulesPlugin(),
//         new HotModuleReplacementPlugin()
//     ],
//     output: {
//         filename: '[name].bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// };
