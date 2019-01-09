const http = require('http');
//http acts like event emitter (see emitter.js)

//we can create web server here and make it listen to a port for requests
const server = http.createServer();

//now since http acts like emitter, you can emit something when some request comes on port 3000
server.on('connection',(socket) => {
    console.log('New connection')
})

server.listen(3000);

//Now from browser hit localhost:3000 and see the console here