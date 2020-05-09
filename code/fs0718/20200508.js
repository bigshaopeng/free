// const fs = require('fs');
// const zlib = require('zlib');

// const WS = fs.createWriteStream('b.txt');
// WS.write('aaaa--');
// WS.end();
// WS.on('finish', () => {
//     console.log('finish')
// })

// const RS = fs.createReadStream('a.txt')
//     .setEncoding('utf8')
//     .on('data', (v) => {
//         console.log('value', v)
//     })
//     .on('end', () => {
//         console.log('end')
//     })
// RS.pipe(WS) 
// const w = fs.createWriteStream('a.unzip.txt');
// fs.createReadStream('a.zip.txt').pipe(zlib.createGunzip()).pipe(w);
