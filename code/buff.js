// const buf = Buffer.from('哈哈')
// console.log(buf.toString('hex'))
// console.log(buf.toString('base64'))
// console.log(buf.toString('ascii'))
// console.log(buf.toString('utf8'))
// console.log(buf.toString('utf16le'))
// console.log(buf.toString('ucs2'))

// const buf = Buffer.alloc(9);
// const w = buf.write('httphttp');
// console.log(w)

// const buf = Buffer.from('12','utf8')
// console.log(buf.toString('base64'))
// var str = '哈哈';
// console.log(str.toString('base64'))

const buf = Buffer.from([1,2,3,4,5])
const jsons = JSON.stringify(buf);
const json = buf.toJSON();
console.log(jsons)
console.log(json)
// const copy = JSON.parse(json,(key,value) => {
//     console.log(key,value.data)
// return value&& value.type==='Buffer'?
// Buffer.from(value.data)
// :value
// })
// console.log(copy)