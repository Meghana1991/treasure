var http = require('http');
var dt = require('./myfirstmodule');
//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // to display as a format.(optional)
    res.write("The date and time are currently: " + dt.myDateTime()); //write a response to the client ie my computer is like a server and whoever from other computer can hit my IP and then will see the mydatetime result. So i asked Tatarao to see <ip_address_of_mine>:8080, and this msg was showed
    res.write(req.url); // This object has a property called "url" which holds the part of the url that comes after the domain name, exampl: http://localhost:8080/summer gives result /summer
    res.end();
}).listen(8080);