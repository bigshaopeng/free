const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 8181 });
wss.on('connection', (ws) => {
    console.log('ws');
    var sendStockUpdates = function (ws) {
        if (ws.readyState == 1) {
            ws.send('false');//需要将对象转成字符串。WebSocket只支持文本和二进制数据
            console.log("更新");
        }
    }
    var clientStockUpdater = setInterval(function () {
        sendStockUpdates(ws);
    }, 10000);
    ws.on("message", (message) => {
        var stockRequest = JSON.parse(message);//根据请求过来的数据来更新。
        console.log("收到消息", stockRequest);
        sendStockUpdates(ws);
    })
})