const http = require('http');
const url = require('url');

exports.start = start;
exports.route = route;

function start(fun){
    http.createServer(function(request,response){
        response.writeHead(200,{'Content-Type': 'text/html charset=utf8'});
        const name = url.parse(request.url).pathname;
        fun(name);
        switch(name){
            case '/a': htmlCode(response,'b',name); break;
            case '/b': htmlCode(response,'c',name); break;
            case '/c': htmlCode(response,'d',name); break;
            case '/d': htmlCode(response,'e',name); break;
            default : htmlCode(response,'a',name); break;
        }
        response.end();
    }).listen(8888)
}
function htmlCode(res,url,name){
    return res.write(`<a href='/${url}'>${name}</a>`)
}

function route(name){
    console.log(name)
}