const express = require("express");
const app = express();

app.use('/static',express.static('../fs'))

app.get('/',(req,res) => {
    res.send("hdis")
})

var server = app.listen(8888, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })



