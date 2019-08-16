// require('./express/express').start()

const pg = require('pg')
const express = require('express');
const BP = require('body-parser');
const UBP = BP.urlencoded({ extended: false });
const path = require('path');
const app = express();
app.use('/data', express.static('./'))

app.get('/i.html', (req, res) => res.sendFile(__dirname + '/index.html'))
app.listen(8989)

// var configs = `tcp://postgres:psqls@localhost:8081/Tables`
// var clientPost = {
//     user: "postgres",
//     password: "psqls",
//     database: "postgres",
//     port: 8081,
// };
// // const client = ;

// app.get('/regist', (req, res) => {
//     const conn = new pg.Client(configs)
//     console.log('start', conn)
//     conn.connect();
//     console.log('end', conn)
//     conn.query('SELECT * FROM aaaaaa', (err, results) => {
//         console.log(err)
//         console.log(results.rows)
//     })
//     res.end('end')
//     // res.sendFile(path.join(__dirname, '../site/html/regist.html'))

// })
// app.listen(8888);
