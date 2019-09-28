// const https = require('https');
const https = require('https');
const cheerio = require("cheerio")

let url = 'https://www.qqtn.com/';

https.get(url, (res) => {
    let chunks = [],
        size = 0;
    res.on('data', function (chunk) {
        chunks.push(chunk);
        size += chunk.length;
    });

    res.on('end', function () {
        let data = Buffer.concat(chunks, size);
        let html = data.toString();
        $ = cheerio.load(html)
        const img = $("img")
        const src = []
        img.map(i => {
            src.push(img[i]['attribs']['src'])
        })
        console.log(src);
        console.log(src.length)
    });
})
