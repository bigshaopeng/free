const express = require('express');
const fs = require('fs');
const xlsx = require('node-xlsx');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const open = require('child_process');
const excel = require('excel-export');

app.use('/', express.static('./file'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/zsp' }).array('image'));

app.get('/', function (req, res) {
    res.send(`<html>
    <head>
    <title>文件上传表单</title>
    </head>
    <body>
    <form action="/excel" method="get" enctype="multipart/form-data">
    <input type="submit" value="生成excel" />
    </form>
    </body>
    </html>`);
})

app.get('/excel', (req, res) => {
    let obj = {};
    let rows = [];
    let cols = [
        { caption: '名字', type: 'string', width: 10 },
        { caption: '年龄', type: 'number', width: 10 },
        { caption: '性别', type: 'string', width: 10 },
        { caption: '生日', type: 'string', width: 10 },
    ]
    let datas = [
        { name: "张三", age: 20, sex: "男", birthday: "1998-10-10" },
        { name: "李四", age: 21, sex: "男", birthday: "1997-08-08" },
        { name: "王五", age: 22, sex: "男", birthday: "1996-06-06" },
        { name: "赵六", age: 20, sex: "男", birthday: "1998-12-12" },
    ];
    // 循环导入从数据库中获取的表内容
    for (var i = 0; i < datas.length; i++) {
        //依次写入
        rows[i] = [
            datas[i].name,
            datas[i].age,
            datas[i].sex,
            datas[i].birthday,
        ];
    }
    //写入道conf对象中
    obj.name = "mysheet";
    obj.rows = rows;
    obj.cols = cols;
    let result = excel.execute([obj, obj, obj]);
    fs.writeFileSync('./file/xlsx.xlsx', result, 'binary')
    res.write(`<a href="xlsx.xlsx" download="excel">excel.json</a>`)
    res.end();
})
app.listen(8888);
open.exec('open http://localhost:8888')