const fs = require('fs');

fs
.createReadStream('read.js')
.setEncoding('utf8')
.on('data',(data)=>!!data && write(data))
.on('end',() => console.log('end'))
.on('error',(err)=>console.log(err))

function write(value){
    fs.createWriteStream('write_.js').write(value,'utf8')
}