const express = require('express');
// const open = require('child_process');
const app = express();

app.use('/', express.static('./home/html/'))
app.listen(8081);
// app.listen(3000);
// open.exec('open http://localhost:3000/await.html')