const fs=require('fs');

fs.readFile('input.txt',(err,data)=>{
    if(err) return console.log(err);
    console.log(data.toString())
})

var data = fs.readFileSync('../input.txt');
console.log(data.toString())