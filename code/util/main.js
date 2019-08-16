const util = require('util');

// function Base(){
//     this.name = 'Base';
//     this.base = 1991;
//     this.sayHello = function(){
//         console.log('hello'+this.name)
//     }
// }
// ------------util.inherits

// Base.prototype.showName = function(){
//     console.log(this.name);
// }

// function Sub(){
//     this.name = 'Sub';
// }
// util.inherits(Sub,Base)

const newBase = new Base();
// newBase.sayHello()
// console.log(newBase)

// const newSub = new Sub();
// newSub.showName()
// console.log(newSub)


// ----------util.inspect
// const obj = {
//     a:{
//         name: 'a',
//         b:{
//             name: 'b',
//             c:{
//                 name: 'c',
//                 d:{
//                     name: 'd'
//                 }
//             }
//         }
//     }
// }

// const objs = util.inspect(obj,true,3,false)
// console.log(objs)

// -----------util.isArray
// const obj = [];
// const obj = new Array([1,2,3])
// const sets = new Set();
// // const maps = new Map();
// sets.add(1)
// sets.add(2)

// // maps.add(1,2)
// const bool = util.isArray(sets)
// console.log(sets,bool)

//  ------------util.isDate
// const date = new Date();

// console.log(date)
// console.log(util.isDate(date.getFullYear()))

// =============util.isError
const err = new Error('dsadasdsad');
const bool = util.isError(err)
console.log(err.message)
console.log(bool)


