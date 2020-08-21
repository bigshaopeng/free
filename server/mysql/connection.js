const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: '127.0.0.1',
    user: 'zsp',
    password: '7023876',
    port: '',
    database: 'test',
})

