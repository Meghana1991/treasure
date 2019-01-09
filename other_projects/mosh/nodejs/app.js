/*
function sayHello(name){
    console.log('Hey there '+ name)
}
sayHello("Sai")
*/
//NODE is C++ program with Chrome's V8 JS engine. we pass this program to Node which gives this program to V8 to execute
//-----------------------------------------------------------------------------

const logger = require('./logger'); //Use const inorder to avoid any modification to the main module/file
logger.logger_func('message from app js')
// or
//logger('message from app js')
