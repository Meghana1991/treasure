var server = require('./server_start');
var router = require('./router');

server.start(router.route);