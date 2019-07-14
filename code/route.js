const http=require('http');
const url=require('url');
start()
function start(){
    http.createServer(function(request,response){
        const pathName = url.parse(request.url).pathname;
        // response.writeHead(200,{'Content-Type':'text/html'})
        switch(pathName){
            case '/a':
                response.write('<a href=":b">a</a>')
                break
            case '/b':
                response.write('<a href="/c">b</a>')
                break
            case '/c':
                response.write('<a href="/d">c</a>')
                break
            default: response.write('<a href="/a">--</a>')
        }
        console.log(pathName)
        response.end();
    }).listen('8888')
}
// module.exports = start;
// exports.start = start;