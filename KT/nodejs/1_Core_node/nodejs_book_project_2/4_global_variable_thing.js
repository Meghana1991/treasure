var http = require('http');

// counter = 0;

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
/**
 * According to Punith, res.write is mandatory because it is used to point to the client back
 * Call from 5_* comes but inorder to recieve and send response to it we need to use .write here
 */
    res.write("Server is running")
    // for (counter = 0; counter <= 5; counter++)
    //     console.log(counter)
    console.log("hi")
}).listen(8124)