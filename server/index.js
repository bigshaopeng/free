// require('./express/express').start()

const { Pool, Client } = require('pg')
const express = require('express');
const BP = require('body-parser');
const UBP = BP.urlencoded({ extended: false });
const path = require('path');
const app = express();
app.use('/data', express.static('./'))

// app.get('/i.html', (req, res) => res.sendFile(__dirname + '/index.html'))
// app.listen(8989)

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: '192.168.99.100',
    port: 5432,
    database: 'postgres',
    sslmode: 'disable'
})

pool.query('select * from account_account', (err, ress) => {
    console.log(err, ress.rows);
    // res.send({ "info_name": ress.rows });
    pool.end()
})