const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req,res) => {
    const pathName = url.parse(req.url).pathname;
    // res.write('------');
    // res.end();
    fs.readFile(pathName.substr(1),(err,data) =>{
        if(err){
            res.writeHead(404,{'Content-Type': 'text/html charset=utf8'})
        }else{
            res.writeHead(200,{'Content-Type': 'text/html charset=utf8'})
            res.write(data.toString());
        }
        res.end();
    })
}).listen(8888)






