const eventEmitter = require('events');
const emitter = new eventEmitter();
const emitter_advanced = new eventEmitter();

//collect the event
//emitter.addListener or emitter.on
emitter.on('eventName',function(){
    console.log('event collected');
});

emitter_advanced.on('advance',function(data){
    console.log(data)
})
//emit something or raise an event
emitter.emit('eventName')
emitter_advanced.emit('advance',{id : 1,some: 'phew'})

//collect from logger module
emitter.on('logger_emit',(data) => {
    console.log('Emit from logger - '+ data)
})

//Since the logger function is not triggered, you need to call it and make it send the event

const log = require('./logger');
log.logger_func();
// Now its expected to trigger the emit event but since there are 2 different eventemitters in these files, it is not possible as they both are different objects linked to different guys
//Hence we need to keep them in class and use this class in emitter.js by creating object of loggerclass and use same event emitter