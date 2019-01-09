const http = require('http');
//http acts like event emitter (see emitter.js)

//we can create web server here and make it listen to a port for requests
const server = http.createServer(function(request,response){
    if(request.url == '/'){
        response.write('hey client, see me in the window babe') //writes to the window
        response.end()
    }

    if(request.url == '/courses'){
        response.write(JSON.stringify([1,2,3])) //writes to the window
        response.end() //Now from browser hit localhost:3000/courses and see the console here
    }
});

//now since http acts like emitter, you can emit something when some request comes on port 3000
server.on('connection',(socket) => {
    console.log('New connection')
})

server.listen(3000);

//Now from browser hit localhost:3000 and see the console here