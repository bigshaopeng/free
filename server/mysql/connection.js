const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    port: '8080',
    database: 'test',
})

