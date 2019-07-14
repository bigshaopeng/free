const http = require('http');
http.createServer(onRequest).listen(8888)

Cat((value) => {
    console.log(value)
},'zsp')


function say(value){
    console.log(value)
}
function Cat(someFun,value){
    someFun(value)
}

function onRequest(request,response){
    response.writeHead(200,{'content-type':'text'})
    response.write(`<div>
    <p style="color:red">hello-word</p>
    <p>hello-word</p>
    <span style="font-size:35px;color: green">11</span>
    </div>`)
    response.end();
}
