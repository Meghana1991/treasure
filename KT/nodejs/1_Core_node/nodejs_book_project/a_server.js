/**
 * This is a web server now!
 * Test it by sending calls to port 8888
 * IP_Address:8888 or
 * http://localhost:8888
 */

/**
 * Whenever a request is received, it
uses the response.writeHead() function to send an HTTP status
200 and content-type in the HTTP response header, and the
response.write() function to send the text “Hello World” in the
HTTP response body.
At last, we call response.end() to actually finish our response.
 */
var http = require("http");
http.createServer(function (request, response) {
    console.log("Request received.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}).listen(9000);
/**
 * Whenever
we request our server (by opening http://localhost:8888/ in our
browser), the message “Request received.” is printed on the
command line
 */