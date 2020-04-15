const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '183.60.82.98',
    user: 'root',
    password: 'zhangshaopeng123',
    port: '8888',
    database: 'test',
})
connection.connect(function (err) {
    if (err) {
        console.log(11, err)
        return
    }
    console.log('success')
});
// const sql = 'SELECT * FROM user';
// connection.query(sql, (err, result, fileds) => {
//     if (err) throw err;
//     console.log(result);
// })
// connection.end();
