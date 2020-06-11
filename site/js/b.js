const http = require('http');
const fs = require("fs");
const url = require("url");


http.createServer((req,res) => {
	console.log("url",req.url);
	const name = url.parse(req.url);
	console.log("name",name)
	console.log("headers",req.headers);
	console.log("method",req.method);
	const info = fs.readFileSync('txt.txt').toString()
	res.end(info);
}).listen(8888);
