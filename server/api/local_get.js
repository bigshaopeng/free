const app = require('../express/express').app;
const success = require('../common/public').success;
const error = require('../common/public').error;
const connection = require('../mysql/connection')
const BP = require('body-parser');
const UBP = BP.urlencoded({extended:false});

module.exports = function(){
    app.get('/get_userinfo',UBP, (req,res) =>{
        const body = req.query;
        if(!body.username){
            res.end(error('username'));
        }
        const sql = 'SELECT * FROM user where username=?';
        connection.query(sql,[body.username],(err,result,fileds) => {
            if(err) throw err;
            if(result.length > 0){
                res.end(success(result[0]));
            }else{
                res.end(error('no user'));
            }
        })

    })
}
