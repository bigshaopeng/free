const app = require('../express/express').app;
const path = require('path');

module.exports = function(){
    app.get('/a',(req,res) => {
        res.send('aaaa')
    })
    app.get('/b',(req,res) => {
        res.sendFile(path.join(__dirname,'../../site/html/index.html'))
    })
    app.get('/c',(req,res) => {
        res.end('cccc')
    })
    app.get('/d',(req,res) => {
        res.write('dddd')
        res.end('()end')
    })
}
