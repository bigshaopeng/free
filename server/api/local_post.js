const app = require('../express/express').app;
const success = require('../common/public').success;
const error = require('../common/public').error;
const BP = require('body-parser');
const UBP = BP.urlencoded({ extended: false });
const fs = require('fs');

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
        if (!msg[body.username]) {
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
    res.end(success());
}

const login = (req, res) => {
    const body = req.body;
    if (!body.username) {
        res.end(error('username'));
        return
    }
    if (!body.password) {
        res.end(error('password'));
        return
    }
    const data = fs.readFileSync('./mysql/table/user_center.json');
    const msg = JSON.parse(data);
    if (!!msg[body.username]) {
        res.end(success())
    } else {
        res.end(error('no user'))
    }
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

module.exports = function () {
    app.post('/post_regist', UBP, regist);
    app.post('/post_login', UBP, login);
    app.post('/post_del', UBP, del);
    app.post('/post_modify', UBP, modify);
}