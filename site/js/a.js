const http = require('http');
const url = require("url");
const querystring = require('querystring');

const str = `<!DOCTYPE html><html lang="en"><body> <script> const pathName = window.location.pathname || "/"; if(pathName !== "/login" || pathName !== "/home"){ location.href = window.location.origin + "/login" } </script></body></html>`
http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:6868")
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("content-type", "application/json")

    if (req.method === 'GET') {
        switch (req.url) {
            case '/file': res.end(str); break;
            default: res.end(str); break;
        }
        return
    }
    if (req.method === 'POST') {
        let data;
        req.on('data', (chunk) => {
            const obj = querystring.parse(chunk.toString())
            data = JSON.stringify(obj)
        })
        req.on('end', () => {
            res.write(data)
            res.end();
        })
        return
    }
    res.end();
}).listen(8989)
