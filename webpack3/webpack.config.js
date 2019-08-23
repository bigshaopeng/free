const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const Html = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].z.js'
    },
    plugins: [
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
        new Html({ title: 'zsp' }),
        new CleanWebpackPlugin()
    ]
}