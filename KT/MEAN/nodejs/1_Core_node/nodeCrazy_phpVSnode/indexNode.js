var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

/**
 * So now you have created a webserver by nodejs which listens to certain port say 8080 and Save the file on your computer: C:\Users\Your Name\myfirst.js

Someone from Germany uses your IP:port/myfirst.js then they see whats in the file. My machine acts like server now.

Step 1 - The German opens a website and clicks button "More.."
Step 2 - The IP address or domain name is resolved and call goes to that machine
Step 3 - The call is recieved by the web server(nodejs webserver above code) on the above port mentioned
Step 4 - The action is taken by the web server and prints Hello World

 */