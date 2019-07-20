const express = require('express');
const fs = require('fs');

const app = express();
const user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
app.get('/a',(req,res)=>{
    fs.readFile(__dirname+'/a.json','utf8',(err,data)=>{
        if(err) throw err;
         data = JSON.parse(data);
        data['user4'] = user['user4'];
        fs.writeFile(__dirname+'/a.json',1,(err) => {
            console.log(err)
        })
        res.end(JSON.stringify(data));
    });
})


app.listen(8888);



