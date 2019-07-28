// require('./express/express').start()
const pg = require('pg')
const express = require('express');
const BP = require('body-parser');
const UBP = BP.urlencoded({ extended: false });
const path = require('path');
const app = express();
app.use('/data', express.static('../site'))
app.listen(8888);

const pool = new pg.Pool({
    user: "postgres",
    password: "psql",
    database: "Tables",
    port: 8081,
});

app.get('/regist', (req, res) => {
    res.sendFile(path.join(__dirname, '../site/html/regist.html'))
})
app.post('/post_regist', UBP, (req, res) => {
    const body = req.body;
    // pool.connect(function (err, client, done) {
    //     if (err) {
    //         return console.error('数据库连接出错', err);
    //     }
    //     console.log(2)
    //     // 简单输出个 Hello World
    //     client.query('SELECT * FROM aaaa', function (err, result) {
    //         console.log(1)
    //         // done();// 释放连接（将其返回给连接池）
    //         if (err) {
    //             return console.error('查询出错', err);
    //         }
    //         res.end(JSON.stringify(result))

    //         console.log(result); //output: Hello World
    //     });
    // });
    console.log(pool)
    pool.connect().then(client => {
        console.log(11)
        // insert 数据
        client.query("Select * FROM aaaa WHERE id=$1", [0]).then(res => {
            // 输出结果，看是否插入成功
            console.log(res.rows[0])
        })

        // res.end(JSON.stringify(1))
    });
});

//     console.log(body)
//     const sql1 = `select * from aaaa`
//     const sql2 = `insert into aaa (id,username,password) values (?,?,?)`;
//     connection.query(sql1, (err, results, fileds) => {
//         if (err) throw err;
//         res.end(JSON.stringify(results));
//     })
//     if (!body.username) {
//         res.end(error('username'));
//         return
//     }
//     if (!body.password) {
//         res.end(error('password'));
//         return
//     }
//     new Promise((resolve, reject) => {
//         const sql1 = `select * from aaa where username=?`;
//         connection.query(sql1, [body.username], (err, results, fileds) => {
//             if (err) throw err;
//             resolve(results.length === 0)
//         })
//     }).then((bool) => {
//         if (bool) {
//             const sql2 = `insert into aa (id,username,password) values (?,?,?)`;
//             connection.query(sql2, [0, body.username, body.password], (err, results, fileds) => {
//                 if (err) throw err;
//                 res.end(success('success'));
//             })
//         } else {
//             res.end(error('user have exit'));
//         }
//     })
// });