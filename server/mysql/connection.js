const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'zsp',
    password: '7023876',
    port: '',
    database: 'test',
})

connection.connect(function (err) {
    if (err) {
        console.log(11, err)
        return
    }
    console.log('success')
});

module.exports = connection