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

connection.query(select1,(err,results) =>{
    if(err) throw err;
    console.log(results)
})
