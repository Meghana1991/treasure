var server = require("./e_server");
var router = require("./d_router");
server.start(router.route);
