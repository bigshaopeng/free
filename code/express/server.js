const express = require('express');
const app = express();

app.use('/data', express.static('../fs'));


app.get('/index.html',(req,res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/form', (req,res) => {
    const data = req.query;
    console.log(data);
    res.end(JSON.stringify(data));
})

const server = app.listen('8888',() => {
    const address = server.address();
    console.log(address.address,address.port)
})



