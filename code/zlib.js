const fs = require('fs');
const zlib = require('zlib');

// 压缩文件
// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'))
// console.log('压缩完成')

// 解压文件
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('inputunzip.txt'))

console.log('success')