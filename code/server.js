var http = require('http');

http.createServer(function(require,response){
    response.writeHead(200,{'content-type':'text/plain'})
    response.end('hello word')
}).listen(8888)
console.log('Server running at http://127.0.0.1:8888/');