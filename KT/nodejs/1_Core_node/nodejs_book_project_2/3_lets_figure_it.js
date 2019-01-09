var http = require('http');
//The url we want, plus the path and options we need
var options = {
    host: 'localhost',
    port: 8124,
    path: '/?file=secondary',
    method: 'GET'
};
var processPublicTimeline = function (response) {
    // finished? ok, write the data to a file
    console.log('finished request');
};
for (var i = 0; i < 10; i++) {
    // make the request, and then end it, to close the connection
    var request  = http.request(options, processPublicTimeline);
    request.on('error',function(err){
        console.log('failed')
    });
    request.end();
}