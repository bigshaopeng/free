const http = require('http');
const url = require('url');
const util = require('util');

http.createServer((req,res)=>{
    const obj=util.inspect(url.parse(req.url,true))
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write(`----`)
    console.log(obj)
    res.end(obj)
}).listen(3000)


