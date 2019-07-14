var fs = require('fs');
var data = '';

var readStream = fs.createReadStream('input.txt');
readStream.on('data',(str) => {
    console.log('data',str)
    fs.createWriteStream('out.txt').write(str)
})
readStream.on('end',()=>{
    console.log('end')
})
readStream.on('error',(err) => {
    console.log('error',err.path)
})
readStream.on('finish',() => {
    console.log('finish')
})




