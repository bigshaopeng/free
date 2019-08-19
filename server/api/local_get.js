const app = require('../express/express').app;
const success = require('../common/public').success;
const error = require('../common/public').error;
const connection = require('../mysql/connection')
const BP = require('body-parser');
const UBP = BP.urlencoded({ extended: false });
const fs = require('fs');

module.exports = function () {
    app.get('/get_userinfo', UBP, (req, res) => {
        const body = req.query;
        if (!body.username) {
            res.end(error('username'));
        }
        const data = fs.readFileSync('./mysql/table/user_center.json');
        const msg = JSON.parse(data);
        if (!!msg[body.username]) {
            res.end(success(msg[body.username]))
        } else {
            res.end(error('no user'))
        }
    })
    app.get('/get_info', UBP, (req, res) => {
        const body = req.query;
        const data = fs.readFileSync('./mysql/table/user_center.json');
        res.end(`${body['jsoncallback']}(${data})`)
    })
}
