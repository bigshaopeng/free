const express = require('express');
const open = require('child_process');
const app = express();

app.use('/file', express.static('./'))
app.listen(3000);
open.exec('open http://localhost:3000/file/webSocket.html')