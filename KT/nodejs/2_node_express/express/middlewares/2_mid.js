var app = require('express')();

/**
 * This works for the /about route and also the callback. Make sure you place the next()
 */
app.use('/about', function (req, res, next) {
    console.log('about path 1');
    next();
}, function (req, res, next) {
    console.log('about path 2')
    next();
});

app.get('/about', function (req, res, next) {
    console.log('get call')
    res.send('get call')
});

/**
 * Conditional next() if else
 * 1) next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.
 * 2) http://localhost:3000/home/1 results in "regular"
 * 3)http://localhost:3000/home/2 results in "special"
 * 4) These next('route') works only for GET POST PUT DELETE 
 */
app.get('/home/:id', function (req, res, next) {
    if (req.params.id == "2") {
        console.log('if', req.params.id)
        next('route')
    } else {
        console.log('else')
        next();
    }
}, function (req, res, next) {
    res.send('regular')
});

app.get('home/:id', function (req, res, next) {
    res.send('special')
});

app.listen(3000);