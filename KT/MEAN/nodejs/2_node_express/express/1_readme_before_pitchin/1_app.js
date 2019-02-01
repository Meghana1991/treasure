/**
 * Why express?
 * Because what happens in the pure node routing is that we need to define many "if" blocks and their respective functionality later. By using express, the code looks good simple and reduces the overhead of coder. When there are 100s of routes and using the pure node way is cumbersome. Hence express js is being considered
 * 
 * https://www.npmjs.com/package/express
 */

var express = require('express');

var app = express();

//Set the default port
////We should check if process.env.PORT exists, if not then use hardcoded3000
app.set('port', process.env.PORT || 3000);

//Set a routing for the page - app.get(path,function callback)
/**
 * The path is what defines the route.
by default, it doesn’t care about the case or trailing slash, and it doesn’t consider the
querystring when performing the match. So the route for the About page will work
for /about, /About, /about/, /about?foo=bar, /about/?foo=bar, etc. but doesnot work for /about/some
 */
/**
 * There are main 4 functions the express provides
 * 1)app.get()
 * 2)app.post()
 * 3)app.put()
 * 4)app.delete()
 */
app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('Manju Travel');
});

//These are incoming requests. When this /about is hit then in reality the API call is happening and we get the data from the backend database
app.get('/about', function (req, res) {
    res.type('text/plain');
    res.send('About Manju Travel');
});

// By sending the params to call
app.get('/about/:id/:name', (req, res) => {
    //http://localhost:3000/about/1/manju
    res.send(req.params) // {"id":"1", "name":"manju"}
    res.send(req.params.id) // 1
    res.send(req.params.name) // manju

    //Query params
    //http://localhost:3000/about/1/manju?sortBy=name
    res.send(req.query)
});
/**
 * Instead of using Node’s low-level res.end, we’re switching to using Express’s extension,
res.send. We are also replacing Node’s res.writeHead with res.set and res.sta
tus. Express is also providing us a convenience method, res.type, which sets the
Content-Type header. While it’s still possible to use res.writeHead and res.end, it isn’t
necessary or recommended.
 */
// custom 404 page
app.use(function (req, res, next) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

//Listen function
//When this application is in prodcution environment, we are not sure if 3000 really exists or not. hence we need to have some checks to see if the current env is having any env variable set, if yes use it else use 3000
app.listen(app.get('port'), function () {
    console.log('Express started');
});