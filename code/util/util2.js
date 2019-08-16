var util = require('util');
var http = require('http');
var express = require('express');
var app = express();

app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})
// app.get('/', function (req, res) {
//     console.log("主页 POST 请求");
//     res.send('Hello get');
// })
app.listen(8081)
// console.log(util.inspect(http, true, 1, true))

// var obj = {
//     aa: {
//         bb: {
//             cc: {
//                 dd: {
//                     ee: {
//                         dd: 'dd'
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(util.inspect(obj, true, 10, true))


// var http = require('http');
// var url = require('url');
// var util = require('util');
// var path = require('path');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     console.log(util.inspect(req.headers, true, 2, true))
//     // 解析 url 参数
//     // var params = path.parse(req.url);
//     // var params = url.parse(req.url, true);
//     // console.log(params)
//     res.end();

// }).listen(3000);

// var path = require('path');
// var dir = path.join(__dirname, '../aa/ss');  // 连接路径
// var dir = path.normalize('aa/bb///dd/s//d')  // 规范路径
// var dir = path.resolve(__dirname, '../../hh') // 绝对路径
// var dir = path.relative(__dirname, '../../hh') // 相对路径
// var dir = path.dirname('../../name/1.txt') // 目录（文件夹）部分
// var dir = path.basename('../../name/1.txt') // 文件部分
// var dir = path.extname('../name/1.txt') // 文件后缀
// var dir = path.parse('../name/1.txt') // json对象
// var dirs = path.format(dir) // 将jison对象解析为目录

// path.join(__dirname, '../ss')
// path.normalize('ss////ds/s')
// path.relative(__dirname, '../')
// path.dirname(__dirname)
// path.basename(__filename)
// path.extname('../1.txt')
// path.parse(__dirname)
// path.format(path.format(__dirname))s
// console.log(dir)
