require('./express/express').start()

// const { Pool, Client } = require('pg')
// const express = require('express');
// const BP = require('body-parser');
// const UBP = BP.urlencoded({ extended: false });
// const path = require('path');
// const app = express();
// app.use('/data', express.static('./'))
// app.use('/html', express.static('../site/html'))

// // app.get('/i.html', (req, res) => res.sendFile(__dirname + '/index.html'))
// // app.listen(8989)

// const pool = new Pool({
//     user: 'postgres',
//     password: 'postgres',
//     host: '192.168.99.100',
//     port: 5432,
//     database: 'postgres',
//     sslmode: 'disable'
// })

// app.get('/p_add', UBP, (req, res) => {
//     console.log(req.body)
//     pool.query(`insert into aa (r_id,r_name,r_slug) values ($1,$2,$3)`, [3, 'slug3', 'name3'], (err, ress) => {
//         // pool.end();
//         console.log('ok')
//         res.end(JSON.stringify({ data: 'ok' }));
//     })
//     // pool.query(`select * from aa`, (err, ress) => {
//     //     // pool.end();
//     //     console.log('ok')
//     //     console.log(ress)
//     //     res.end('ok');
//     // })
// })

// app.listen(8888);