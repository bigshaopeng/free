const fs = require('fs');
const zlib = require('zlib');

// fs.createReadStream('write_.js')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('write_.min.js'))

fs.createReadStream('write_.min.js')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('write_.write.js'))