const merge = require('webpack-merge');
const common = require('./webpack_common.js');
const Uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production'
})

// module.exports = merge(common, {
//     plugins: [
//         new Uglifyjs()
//     ]
// })
