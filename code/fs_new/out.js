const fs = require('fs');

const CR = fs.createReadStream('./w.txt');
CR.setEncoding('utf8');
CR.on('data', (data) => console.log(data))
    .on('end', () => console.log('end'))