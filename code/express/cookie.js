const express = require('express');
const cookieParser = require('cookie-parser');
const util = require('util');

const app = express();
app.use(cookieParser);

app.get('/',(req,res) => {
    console.log('cookie:' + util.inspect(req.cookies))
    res.end();
})

app.listen(8082);



