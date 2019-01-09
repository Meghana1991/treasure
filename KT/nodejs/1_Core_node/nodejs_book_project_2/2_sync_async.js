var http = require("http");
var fs = require("fs");

//Synchronous function
function writeNumbers(res) {
    counter = 0;
    // increment global, write to client
    for (var i = 0; i < 5; i++) {
        counter++;
        res.write(counter.toString() + '\n');
    }
}

//Asynchronous function
http.createServer(function (req, res) {
    var query = require('url').parse(req.url).query;
    var app = require('querystring').parse(query).file + ".txt";
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    //call the sync func
    writeNumbers(res);

    //call the async func
    setTimeout(function () {
        console.log("opening ", app);

        fs.readFile(app, 'utf8', function (err, data) {
            if (err)
                res.write('Could not find or open file for reading\n');
            else {
                res.write(data);
            }
            // response is done
            res.end();
        })
    })
}).listen(8124)

console.log('Server running at 8124');

/**
 * RESULT
 * HIT THIS - http://localhost:8124/?file=Nodetreasure2
 * 1
 * 2
 * 3
 * 4
 * 5
 * Text file contents
 * -----------------------------------------------------------------------------------------------------
 * What happens here?
 * 
 * We should tell node to behave well! Yes you heard it right. 
 * 
 * We should not let the sync functions loose. We need to make it async by callback otherwise they will get stubborn to first execute themselves before we go to next function.
 * 
 * Node first sees the type of function, if it is sync then it is forced to wait like traditional techs but when it is async it will be happy to put them in the queue or stack or event loop and proceeds with next guy below.
 * 
 * See Node means it is not always async async async. Your duty to make it async by giving it a event loop or callback
 *
 * Node is platform and our duty to make it behave well by giving callbacks to it
 * 
 * Assume that the sync func above is a complex math operation which takes really more time then what happens? hmmm its impossible for node to bypass and proceed with next lines because it is sync function and is not tied up with any callback. Node just has to wait patiently till it is done and blocks the user till then. Hence node is not suitable for complex operations.
 */