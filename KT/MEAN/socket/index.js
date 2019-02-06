var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    // res.send("Hello World")
    res.sendFile(__dirname + '/index.html');
})
/**
 * Notice that I initialize a new instance of socket.io by passing the http (the HTTP server) object. Then I listen on the connection event for incoming sockets, and I log it to the console.
 */
// io.on('connection', function (socket) {
//     socket.on('chat message', function (msg) {
//         console.log('message: ' + msg);
//     });
//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });
// });
/**
 * emit the event from the server to the rest of the users.
 * In this case, for the sake of simplicity we’ll send the message to everyone, including the sender.
 */
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(3000, function () {
    console.log("Listening to port 3000")
})