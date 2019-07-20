const fs = require("fs");
fs.writeFile("w.txt","我是张少鹏",(err)=>{
	if(err) throw err;
	fs.readFile("w.txt",(err,data)=>{
	if(err) return err;
	console.log(data.toString());
	})
})
