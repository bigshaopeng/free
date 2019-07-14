const fs = require('fs');
const buf = new Buffer.alloc(1024);

// ------------open()
// fs.open('input.txt','r',(err,fd)=>{
//     if(err) return console.log(err);
//     console.log('success',fd)
// })

// -------------stat()
// fs.stat('input.txt',(err,file)=>{
//     console.log(file.isFile())
// })


// -------------writeFile
// fs.writeFile('hhh.txt','123456789',{ mode: 0666, flag:'w'},(err)=>{
//     if(err){
//         return err
//     }
//     readFile()
// })

// function readFile(){
//     fs.readFile('input.txt',function(err,data){
//         if(err){
//             return err
//         }
//         const d = data.toString()
//         console.log(d)
//     })
// }

// --------------read
// fs.open('input.txt','r+', (err, fd) => {
//     if(err) return err;
//     // -------------ftruncate
//     fs.ftruncate(fd,10,(err)=>{
//         if(err) return err;
//         // ------------read
//         fs.read(fd,buf,0,buf.length,0,(err,bytes) => {
//             if(err) return err;
//             console.log(bytes)
//             if(bytes>0){
//                 console.log(buf.toString())
//             }
//             // --------------close
//             fs.close(fd,(err)=>{
//                 if(err) return err;
//                 console.log('closed')
//             })
//         })
//     })
// })

// -------------unlink
// fs.unlink('hhh.txt',(err) => {return err})

// fs.writeFile('hhh.txt','dasdsdsdsdsd',{encoding:'utf8',mode:0666,flag:'w'},(err) => {if (err) {return err}})


// -------------mkdir
// fs.mkdir('mkdir',(err) => {
//     if(err){throw err}
// })  

// ---------------rmdir
// fs.rmdir('./mkdir',(err) => {
//     if(err){throw err}
// })


// -------------readdir
// fs.readdir('./',(err,files) => {
//     if(err){throw err}
//     console.log(files)
//     // files.forEach((f) => {
//     //     console.log(f)
//     // })
// })






