const express = require('express');
const fs = require('fs');
const xlsx = require('node-xlsx');
const bodyParser = require('body-parser');
const multer = require('multer');
var open = require('child_process');
const app = express();
app.use('/', express.static('./file'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/zsp' }).array('image'));

app.get('/', function (req, res) {
    res.send(`<html>
    <head>
    <title>文件上传表单</title>
    </head>
    <body>
    <h3>文件上传：</h3>
    选择一个文件上传: <br />
    <form action="/file_upload" method="post" enctype="multipart/form-data">
    <input type="file" name="image" size="50" />
    <br />
    <input type="submit" value="上传文件" />
    </form>
    </body>
    </html>`);
})

app.post('/file_upload', (req, res) => {
    const sheet = xlsx.parse(req.files[0].path);
    console.log(sheet)
    let cn = '';
    let en = '';
    sheet.forEach(item => {
        if (item.data.length > 0) {
            item.data.forEach((list, index) => {
                if (index !== 0) {
                    switch (list.length) {
                        case 2:
                            en += `\r"${list[0]}":"${list[1]}"${item.data.length - 1 !== index ? ',' : ''}`;
                            cn += `\r"${list[0]}":""${item.data.length - 1 !== index ? ',' : ''}`;
                            break;
                        case 3:
                            en += `\r"${list[0]}":"${list[1]}"${item.data.length - 1 !== index ? ',' : ''}`;
                            cn += `\r"${list[0]}":"${list[2]}"${item.data.length - 1 !== index ? ',' : ''}`;
                            break
                    }

                }
            })
        }
    })
    fs.writeFileSync('./file/cn.json', `{${cn}\r}`)
    fs.writeFileSync('./file/en.json', `{${en}\r}`)
    res.write(`<a href="en.json" download="en">en.json</a><br/>
    <a href="cn.json" download="cn">cn.json</a>`)
    res.end();
})
app.listen(8888);
open.exec('open http://localhost:8888');