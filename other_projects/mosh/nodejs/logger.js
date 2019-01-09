var url = "google.com"
// console.log(module); //Its a object and check the result
const eventEmitter = require('events');
const event_send = new eventEmitter();

function logger(msg){
    //might have 10000 lines
    // console.log(msg + ' -- URL -' + url)
    event_send.emit('logger_emit','Hi i am Loggy')
}

//The vars and funcs in this file are private to this module and i would like to export this module/file so that other files or modules can use this
module.exports.logger_func = logger;
//or
//module.exports = logger;