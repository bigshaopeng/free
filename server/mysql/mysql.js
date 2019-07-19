const connection = require('./connection')

connection.connect();

const sql = 'SELECT * FROM user_center';
connection.query(sql,params,(err,result,fileds) => {
    if(err) throw err;
    console.log(result);
})

connection.end();