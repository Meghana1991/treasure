var server = require('./g2_server');
var router = require('./g2_router');
var requestHandlers = require('./g2_requestHandlers');

/**
 * To handle the routing
 * We can do it as associative object
 */
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

console.log(handle)
/**
 * { '/': [Function: start],
  '/start': [Function: start],
  '/upload': [Function: upload] }
 */
server.start(router.route, handle);