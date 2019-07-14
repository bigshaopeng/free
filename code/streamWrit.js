var fs = require('fs');
var data = '我是张少鹏张少鹏张少鹏2'

const wr = fs.createWriteStream('output.txt')
wr.write(data,'utf8')
wr.end()
wr.on('finish',() => console.log('finish'))
wr.on('error',() => console.log('error'))