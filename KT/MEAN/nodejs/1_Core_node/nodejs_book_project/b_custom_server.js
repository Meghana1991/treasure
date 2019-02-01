/**
 * Create a custom module and import it in different files
 * like http
 */
/**
 * As you can see, we can use our server module just like any
internal module: by requiring its file and assigning it to a
variable, its exported functions become available to us.
That’s it. We can now start our app via our main script, and it
still does exactly the same
 */

var http = require("http");
function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;