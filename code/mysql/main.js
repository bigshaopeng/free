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
// 搜索
const select1="SELECT * FROM user_center";
const select2 = `CREATE TABLE user (
    id INT(8)  AUTO_INCREMENT,
    username CHAR(20) NOT NULL,
    password CHAR(40) NOT NULL,
    PRIMARY KEY (id)
)`

connection.query(select2,(err) =>{
    if(err) throw err;
    console.log(1)
    // res.end(JSON.stringify(results));
})

const server = app.listen(8888,() =>{
    const ad = server.address();
    console.log(ad)
})



