const http = require('http');
const url = require('url')

function start(fun){
    http.createServer(function(request,response){
        response.writeHead(200,{'Content-Type':'text/html charset=utf8'})
        const pathName = url.parse(request.url).pathname;;
        fun(pathName);
        switch(pathName){
            case '/a':
                response.write(`<a href="b">a_${pathName}<a>`)
                break
            case '/b':
                response.write(`<a href="c">b_${pathName}<b>`)
                break
            case '/c':
                response.write(`<a href="d">c_${pathName}<a>`)
                break
            default: response.write(`<a href="a">def_${pathName}<a>`)
        }
        response.end();
    }).listen(8888)
}
module.exports = start;