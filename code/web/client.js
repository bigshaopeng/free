const http = require('http');

const options = {
    host: 'localhost',
    port: 8888,
    path: '/index.html',
}

const callBack = (res) =>{
    let body = '';
    res.on("data",(chunk) => {
        body += chunk
    })
    res.on("end",() => {
        console.log(body)
    })
}

const req = http.request(options,callBack)
req.end()


