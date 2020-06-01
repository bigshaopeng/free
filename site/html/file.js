// require('http').createServer((req, res) => res.end(require('fs').readFileSync('a.html'))).listen(3000);
// const http = require('http');
// const fs = require('fs');
// function files(error, data) {
//     if (error) return error;
//     console.log(data.toString())
//     return data.toString()
// }
// const ajax = (req, res) => {
//     // console.log('-----req-h', req.headers)
//     // console.log('-----req-m', req.method)
//     // console.log('-----req-u', req.url)
//     // if (req.method === "GET") {

//     // }
//     // res.write();
//     console.log(req.url)
//     if (req.url.indexOf('.ico') > -1) return;
//     fs.readFile(req.url.slice(1), (error, data) => {
//         if (error) return error;
//         res.write(data.toString())
//         res.end();
//     })
// }

// http.createServer(ajax).listen(3000);

const express = require('express');
const app = express();
app.use('/', express.static('./'));
app.listen(3000);