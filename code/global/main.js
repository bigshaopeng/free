// console.log(__filename)

// console.log(__dirname)

// const t=setTimeout(() => {
//     console.log(1)
// },1000)

// clearTimeout(t)

// console.trace(t)

// console.log(global.process.config)

// process.on('exit', function(code) {

//     // 以下代码永远不会执行
//     setTimeout(function() {
//       console.log("该代码不会执行");
//     }, 0);
    
//     console.log('退出码为:', code);
//   });
//   console.log("程序执行结束")
process.stderr.write("Hello World!" + "\n");