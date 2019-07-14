// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var connectHander = function connected(){
//     console.log('success');
//     eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection',connectHander);
// eventEmitter.on('data_received',function(){
//     console.log('data-success');
// })
// eventEmitter.emit('connection')

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on('zsp',function(){
//     console.log('zsp')
// })
// eventEmitter.emit('zsp')


// var events = require('events');
// var eventsEmitter = new events.EventEmitter();
// var events = require('events');
// var eventsEmitter = new events.EventEmitter();
// var events = require('events');
// var eventsEmiotter = new events.EventEmitter();
// var events = require('events');
// var eventsEmitter = new events.EventEmitter();

// var events = require('events').EventEmitter;
// var eventsEmitter = new events();
// eventsEmitter.on('click',()=>{
//     console.log('click')
// })
// eventsEmitter.emit('click');

// var EventEmitter = require('events').EventEmitter;
// // var setEvent = new EventEmitter();
// var onEmit = new EventEmitter();
// const clickHandle = () => console.log(1);
// onEmit.on('click',clickHandle)

// setTimeout(() => {
//     onEmit.emit('click');
// },2000)



const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();
const clickHandle = ()=>console.log('1');
const clickHandle2 = ()=>console.log('2');

event.addListener('add',clickHandle2)
 event.on('add',clickHandle);
 console.log(event.listenerCount('add'))

 event.emit('add')
 event.removeListener('add',clickHandle2)
 event.emit('add')
 console.log(event.listenerCount('add'))
//  event.once('hover',clickHandle);
//  event.removeListener('add',function(){
//      console.log('remove')
//  })
//  event.emit('click','hover')
//  setInterval(() => {
//     event.emit('click','a','cccc')
//     console.log(11)
//  },3000)
// console.log(event.listeners('add'))
 
event.removeAllListeners(['add'])
console.log(222)
event.emit('add')
event.emit('error',function(){
    console.log(22)
})