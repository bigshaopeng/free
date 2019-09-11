const HTML = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')

module.exports = {
    devtool: "inline-source-map",
    entry: {
        app: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].app.js'
    },
    plugins: [
        new HTML({ title: '123' }),
        new CleanWebpackPlugin(),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
