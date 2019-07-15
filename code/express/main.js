// const express = require('express');
// const app = express();

// app.get('/a',(req,res) => {
// // console.log(req.cookies)
// // console.log(req.hostname)
// console.log(req.params)
// // console.log(req.query);
// // console.log(req.route);
// // console.log(req.get())
// console.log(res)
//     res.send(`<div style="color:red">render</div>`);
//     // res.render('<div style="color:red">render</div>',(err) => {
//     //     if(err) throw err;
//     // })
// })

// const server = app.listen(8081,() => {
//     const ad = server.address();
//     const host = ad.address;
//     const port = ad.port;
//     console.log('------',ad,host,port)
// })




var express = require('express');
var app = express();
 
//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})
 
 
//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})
 
//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
 
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
 
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
