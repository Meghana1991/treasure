/**
 * 1) .use and .get are middleware bearing functions. The function inside these are middleware function
 * 2) .use is used if you have to perform something before the routes actually start
 * 3) .use can also be used with certain path like .get
 * 4) .use is used also whenever we need to do some action globally not specific (like .get with path)
 * 5) without mentioning the .next, the control doesnot go to next middleware.Be it get or use any
 * 6) there are standard middlewares and already existing middlewares also custom ones can be created
 * 7) the order of middleware matters. First the .use should be called since it is global action then .get
 * 8) the .use gets applied to any every route and the function executes for every route
 * 9) the middlewares like .get and .use can have access to the req and resp objects
 */
var app = require('express')();

app.use(function (req, res, next) {
    console.log('Middleware One')
    next();// If i dont put this, then the command prompt console doesnot go to next middleware
});

app.use(function (req, res, next) {
    console.log('Middleware Two')
    next();
});

var someFn = function(req,res,next){
    console.log('Middleware Three')
    next();
}
app.use(someFn);

app.get('/', function (req, res,next) {
    res.send('Welcome to Middle ware');
});

app.listen(3000);