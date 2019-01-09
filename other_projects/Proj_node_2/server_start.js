var http = require('http'); //keep this http module related stuff including functions variables all in our local variable http
var url = require('url');

//PLEASE SEE BASICS PROJECT IN THE DIR AND COME BACK
function start(route) {
    function onRequest(request, response) {
        /**
         *  Our application can now distinguish requests based on
            the URL path requested - this allows us to map requests to our
            request handlers based on the URL path using our (yet to be
            written) router.
            In the context of our application, it simply means that we will
            be able to have requests for the /start and /upload URLs handled
            by different parts of our code.
         */
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);
        
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello Worlddd");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
//As you can see, we can use our server module just like any internal module: by requiring its file and assigning it to a variable, its exported functions become available to us
exports.start = start;