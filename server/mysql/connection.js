const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'zsp',
//     password: '7023876',
//     port: '',
//     database: 'test',
// })

const connection = mysql.createConnection({
    host: 'rm-bp1naf6tv9n4kxxn6zo.mysql.rds.aliyuncs.com',
    user: 'zsp1',
    password: 'Zz369369',
    port: '3306',
    database: 'a_user',
})

connection.connect(function (err) {
    if (err) {
        console.log(11, err)
        return
    }
    console.log('success')
    // let sql = `SELECT * FROM a_user`
    // sql = "CREATE DATABASE a_test"
    // connection.query(sql, (errs, result) => {
    //     if (errs) {
    //         throw 1
    //     }
    //     console.log(2, result)
    // });
});

module.exports = connection