const app = require('../express/express').app;
const success = require('../common/public').success;
const error = require('../common/public').error;
const BP = require('body-parser');
const UBP = BP.urlencoded({ extended: false });
const fs = require('fs');
const path = require('path');

const regist = (req, res) => {
    const body = req.body;
    if (!body.username) {
        res.end(error('username'));
        return
    }
    if (!body.password) {
        res.end(error('password'));
        return
    }
    fs.readFile('./mysql/table/user_center.json', (err, data) => {
        if (err) { console.log(err); return null };
        let msg = JSON.parse(data);
        if (!!msg[body.username]) {
            msg[body.username] = {
                username: body.username,
                password: body.password,
            }
            fs.writeFile('./mysql/table/user_center.json', JSON.stringify(msg), (err) => console.log(err))
            res.end(success('注册成功'));
        } else {
            res.end(error('error regist'));
        }
    })
    // res.end(success());
}

const htmltel = (req, res) => {
    res.send(`<div style="color:red">express</div>`);
}
const login = (req, res) => {
    const body = req.body;
    console.log(req, body)
    res.end(success(body))
    // if (!body.username) {
    //     res.end(error('username'));
    //     return
    // }
    // if (!body.password) {
    //     res.end(error('password'));
    //     return
    // }
    // const data = fs.readFileSync('./mysql/table/user_center.json');
    // const msg = JSON.parse(data);

    // if (!!msg[body.username]) {
    //     res.end(success())
    // } else {
    //     res.end(error('no user'))
    // }
}

const modify = (req, res) => {
    const body = req.body;
    if (!body.username) {
        res.end(error('no username'))
        return
    }
    if (!body.password) {
        res.end(error('password'));
        return
    }
    res.end(success())
}
const del = (req, res) => {
    const body = req.body;
    if (!body.username) {
        res.end(error('no username'))
        return
    }
    if (!body.password) {
        res.end(error('password'));
        return
    }
    res.end(success())
}

const upload = (req, res) => {
    const url = path.join(__dirname, '../../upload/head');
    const des_file = url + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: '文件上传成功',
                    filename: req.files[0].originalname
                };
            }
            res.end(JSON.stringify(response));
        });
    });
    // var des_file = __dirname + "/" + req.files.originalname;
    // fs.readFile(req.files.path, function (err, data) {
    //     fs.writeFile(des_file, data, function (err) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             response = {
    //                 message: 'File uploaded successfully',
    //                 filename: req.files.originalname
    //             };
    //         }
    //         console.log(response);
    //         res.end(JSON.stringify(response));
    //     });
    // });

    // console.log(req.files)
    // const info = req.body;
    // console.log(info)
    // fs.readFile(info.file, (err, data) => {
    //     fs.writeFile(`${info['filename']}.txt`, data, (err) => {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             res.send(success())
    //         }
    //     })
    // })
    res.send(success())
}
module.exports = function () {
    app.post('/post_regist', UBP, regist);
    app.post('/post_login', UBP, htmltel);
    app.post('/post_del', UBP, del);
    app.post('/post_modify', UBP, modify);
    // app.post('/post_upload', UBP, upload);
    app.post('/post_upload', upload)
}