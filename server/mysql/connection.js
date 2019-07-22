const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    port: '',
    database: 'test',
})

