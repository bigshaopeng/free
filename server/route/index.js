const app = require('../express/express').app;
const path = require('path');

module.exports = function(){
    app.get('/',(req,res) => {
        res.sendFile(path.join(__dirname,'../../site/html/index.html'))
        // res.send('aaaa')
    })
    app.get('/regist',(req,res) => {
        res.sendFile(path.join(__dirname,'../../site/html/regist.html'))
    })
    app.get('/login',(req,res) => {
        res.sendFile(path.join(__dirname,'../../site/html/login.html'))
        // res.end('cccc')
    })
    app.get('/logout',(req,res) => {
        res.sendFile(path.join(__dirname,'../../site/html/logout.html'))
        // res.write('dddd')
        // res.end('()end')
    })
}
