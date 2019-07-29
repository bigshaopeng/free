const app = require('../express/express').app;
const success = require('../common/public').success;
const error = require('../common/public').error;
const BP = require('body-parser');
const UBP = BP.urlencoded({ extended: false });

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
    res.end(success());
}

const login = (req, res) => {
    console.log(1)
    const body = req.body;
    // if (!body.username) {
    //     res.end(error('username'));
    //     return
    // }
    // if (!body.password) {
    //     res.end(error('password'));
    //     return
    // }
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
}