/**
 * This machine ie my machine is considered as server or web server 
 * If machine from Germany wants to access mine then IPAddress:8124/ should be hit then
 * he can see hello world
 * 
 * So this port is always listened and busy by my node web server.
 * When request comes here from Germany or any wher then my web server serves it
 */

var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write("Hello World");
    // res.end();
}).listen(8124)