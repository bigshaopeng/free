const fs = require('fs');

var data = '我是张少鹏哈哈哈哈哈哈哈哈哈哈';
const wr = fs.createWriteStream('output.txt')
wr.write(data,'utf8')
wr.end().on('finish',() => {console.log('finish')});