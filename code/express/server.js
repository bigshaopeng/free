const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/data', express.static('../fs'));

// / 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/index.html',(req,res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/form', (req,res) => {
    const data = req.query;
    console.log(data);
    res.end(JSON.stringify(data));
})

app.post('/forms',urlencodedParser,(req,res) => {
    console.log(req.body);
    res.end(JSON.stringify(req.body));
})

const server = app.listen('8888',() => {
    const address = server.address();
    console.log(address.address,address.port)
})



