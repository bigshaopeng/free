const express = require('express');
const app = express();
app.use('/data',express.static('../site'))

exports.app = app;
exports.start = function(){
    app.listen(8888);
}

require('../route/index')()
