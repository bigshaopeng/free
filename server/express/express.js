const express = require('express');
const app = express();
app.use('/data', express.static('../site'))
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
})

exports.app = app;
exports.start = function () {
    app.listen(8888);
}

require('../route/index')();
require('../api/local_post')();
require('../api/local_get')();
// require('../api/post')();
// require('../api/get')();