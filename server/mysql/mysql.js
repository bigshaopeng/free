const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    port: '8080',
    database: 'test',
})

connection.connect();

const sql = 'SELECT * FROM user_center';
connection.query(sql,params,(err,result,fileds) => {
    if(err) throw err;
    console.log(result);
})

connection.end();