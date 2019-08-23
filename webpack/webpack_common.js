const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'helllo word' }),
        new CleanWebpackPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
}
