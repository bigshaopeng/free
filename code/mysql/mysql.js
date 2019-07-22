const mysql = require('mysql')
const express = require("express");
const app = express();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root@localhost',
    passeord: '',
    database: 'test'
})
connection.connect();
const select1="SELECT * FROM user_center";

app.use('/static',express.static('../fs'));
app.get('/index.html', (req,res) =>{
    res.sendfile(__dirname+'/index.html')
})
app.get('/form',(req,res) =>{
    const data = req.query;
    connection.query(select1,(err,results) =>{
        if(err) throw err;
         res.end(JSON.stringify(results));
    })
})

const server = app.listen(8888,() =>{
    const ad = server.address();
    console.log(ad)
})



