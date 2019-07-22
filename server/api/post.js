const app = require('../express/express').app;
const success = require('../common/public').success;
const error = require('../common/public').error;
const BP = require('body-parser');
const UBP = BP.urlencoded({extended:false});
const connection = require('../mysql/connection');
const events = require('events');
const eventEmitter = new events.EventEmitter();
connection.connect();

eventEmitter.on('insert',(body) =>{
    const sql2 = `insert into user (username,password) values (?,?)`;
    connection.query(sql2,[body.username, body.password],(err, results,fileds) => {
        if(err) throw err;
        return true;
    })
})

const regist = (req,res) =>{
    const body = req.body;
    if(!body.username){
        res.end(error('username'));
        return
    }
    if(!body.password){
        res.end(error('password'));
        return
    }
    new Promise((resolve,reject) =>{
        const sql1 = `select * from user where username=?`;
        connection.query(sql1,[body.username],(err,results,fileds) =>{
            if(err) throw err;
            resolve(results.length === 0)
        })
    }).then((bool) =>{
        if(bool){
            const sql2 = `insert into user (username,password) values (?,?)`;
            connection.query(sql2,[body.username, body.password],(err, results,fileds) => {
                if(err) throw err;
                res.end(success('success'));
            })
        }else{
            res.end(error('user have exit'));
        }
    })
}

const login = (req,res) =>{
    const body = req.body;
    if(!body.username){
        res.end(error('username'));
        return
    }
    if(!body.password){
        res.end(error('password'));
        return
    }
    const sql1 = `select * from user where username=? and password=?`;
    connection.query(sql1, [body.username,body.password],(err,results,fileds) =>{
        if(err) throw err;
        if(results.length > 0){
            res.end(success())
        }else{
            res.end(error('no user'))
        }
    })
}

const del = (req,res) =>{
    const body = req.body;
    if(!body.username){
        res.end(error('no username'))
        return
    }
    if(!body.password){
        res.end(error('password'));
        return
    }
    const sql1 = `delete from user where username=? and password=?`;
    const sql2 = `delete from user`;
    const sql = body.is_all ? sql2 : sql1;
    connection.query(sql,[body.username,body.password],(err,results,fileds) =>{
        if(err) throw err;
        res.end(success())
    })
}

module.exports = function(){
    app.post('/post_regist',UBP, regist);
    app.post('/post_login',UBP, login);
    app.post('/post_del',UBP, del);
}