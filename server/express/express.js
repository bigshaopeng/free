const express = require('express');
const multer = require('multer');

const app = express();
app.use('/file', express.static('../site/html'))
app.use('/main', express.static('../static/img'))
app.use('/img', express.static('../upload'))
app.use(multer({ dest: '/tmp/' }).array('image'));

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  // res.writeHead(200, { "Content-Type": "text/html" });
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
})
const template = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>逗逗</title>
</head>
<body>
  <div id="root">express</div>
  <div id="root" style="color:red">express</div>
  <div id="root">express</div>
  <div id="root">express</div>
</body>
</html>`;

// app.get("*", (req, res) => {
//   res.send(template)
// })

exports.app = app;
exports.start = function () {
  app.listen(8888);
}

require('../route/index')();
require('../api/local_post')();
require('../api/local_get')();
// require('../api/post')();
// require('../api/get')();