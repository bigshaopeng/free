const http = require('http');
const url = require("url");

const str = `<!DOCTYPE html><html lang="en"><body> <script> const pathName = window.location.pathname || "/"; if(pathName !== "/login" || pathName !== "/home"){ location.href = window.location.origin + "/login" } </script></body></html>`
http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:6868")
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("content-type", "application/json")
    const obj = url.parse(req.url)
    const nam = url.parse(req.url);
    console.log(obj)
    const url = req.url;
    // if (url !== '/login' && url !== '/home') {
    //     res.write(str)
    // } else {
    //     res.write(url)
    // }
    switch (url) {
        case '/file':
            res.end(str);

            break;

        default:
            break;
    }
    res.end();
}).listen(8989)
