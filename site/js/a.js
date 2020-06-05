const http = require('http');
const str = `<!DOCTYPE html><html lang="en"><body> <script> const pathName = window.location.pathname || "/"; if(pathName !== "/login" || pathName !== "/home"){ location.href = window.location.origin + "/login" } </script></body></html>`
http.createServer((req, res) => {
    console.log(req.url)
    const url = req.url;
    if (url !== '/login' && url !== '/home') {
        res.write(str)
    } else {
        res.write(url)
    }
    res.end();
}).listen(8989)
