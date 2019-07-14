const EventEmitter = require('events').EventEmitter;
const ev = new EventEmitter();

ev.on('click',handle)
ev.addListener('add',handle)
ev.once('one',handle)
ev.emit('one','one')
ev.emit('one','once')
// ev.emit('click')
// ev.emit('add','add')
// ev.removeListener('add',handle)
ev.removeAllListeners(['click','add'])
ev.emit('add')
ev.emit('click')
function handle(value){
    console.log(1,value)
}