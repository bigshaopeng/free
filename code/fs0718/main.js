const fs = require('fs');
const zlib = require('zlib');
const data = 'zspzspzsp'
const err1 = (err,data) => {
    if(err) return err;
    console.log(data.toString())
}
const err2 = (err)=> {
    if(err) throw err;
}
const err3 = (data)=> {
    console.log(data)
}

// stream流  on -> data end error finish
// const wr = fs.createWriteStream('streamInput.txt');
// wr.write(data);
// wr.write(data,'utf8');
// wr.end(); // 没有写入end方法结束写入流，不会进入finish事件流；
// wr.on('finish', () => console.log('finish'));
// wr.on("error", (err) => console.log(err))

// fs.createReadStream('streamInputs.txt')
// .setEncoding('utf8')
// .on('data',err3)
// .on('end',() => console.log('end'))
// .on('error',(err)=>console.log(err))

// 链式流 压缩/解压文件
// const WS = fs.createWriteStream('streamInput.zlib.txt')
// fs.createReadStream('streamInput.txt')
// .pipe(zlib.createGzip())
// .pipe(WS)

// const WS = fs.createWriteStream('streamInput.unzlib.txt');
// fs.createReadStream('streamInput.zlib.txt')
// .pipe(zlib.createGunzip())
// .pipe(WS);

// 管道流  读出->写入
// const RS = fs.createReadStream('streamInput.txt');
// const WS = fs.createWriteStream('streamOutput.txt');
// RS.pipe(WS);

// 创建文件
// fs.createWriteStream('s.txt') // 创建文件 内容空
// fs.writeFile('as.txt','m',(err) => console.log(err)) // 必须有文件名，文件内容，回调函数
// fs.writeFile('as.txt','m',{encoding:'utf8',mode:0666,flag:'w'},(err) => console.log(err)) // 必须有文件名，文件内容，回调函数
// fs.writeFileSync('v.txt'); // 创建文件 内容undefined
// fs.writeFileSync('v.txt','sss'); // 创建文件 内容sss


// 文件读取
// writefile
// fs.writeFile('input.txt',data,(err)=>{
//     if(err) return err;
// })

//readFile
// fs.readFile('input.txt',err1)

// readFileSync
// const data = fs.readFileSync('input.txt').toString()
// console.log(data)

// 打开文件
// fs.open('input.txt','r',(err,fd) => {
//     if(err)throw err;
//     console.log(fd)
// })
// fs.open('streamInput.txt','r',(err,fd) => {
//     if(err)throw err;
//     console.log(fd)
// })

// 获取文件信息
// fs.stat('../express/比赛未开始.png',(err,stats) => {
//     console.log(stats.isFile())
// })


// 读取文件
// const buf = new Buffer.alloc(2);
// fs.open('input.txt','r',(err,fd) => {
//     if(err) throw err;
//     console.log(fd)
//     fs.read(fd,buf,0,buf.length,0,(err,bytes) => {
//         if(err) console.log(err);
//         console.log(bytes);
//         if(bytes > 0){
//             console.log(buf.toString())
//         }
//         console.log(fd)
//         fs.close(fd,() => {
//             console.log('close')
//         })
//         // close 之后代码便不执行
//         console.log(1)
//     })
// })

// 截取文件
// const buf = new Buffer.alloc(1024);
// fs.open('input.txt','r',(err,fd)=>{
//     if(err)console.log(err);
//     // 文件截取
//     fs.ftruncate(fd,1,(err) => {
//         if(err)console.log(1,err);
//         fs.read(fd,buf,0,buf.length,0,(err,bytes)=>{
//             if(err)console.log(err);
//             console.log(bytes)
//             if(bytes > 0){
//                 console.log(buf.toString())
//             }
//             fs.close(fd, () => console.log('close'))
//         })
//     })
// })


// 删除文件
// fs.unlink('input.txt',() => console.log('unlink'))

// 创建目录 =====此项失败
// fs.mkdir('/bb/ee/ff',{recursive: true},()=>console.log('mkdir'))

// 删除目录
// fs.rmdir('b/',() => console.log('rmdir'))

// 读取目录
// fs.readdir('../fs0718/',(err,dir)=>console.log(dir))








