var express = require('express');
var app = express();

/**
 * Since we are using the Handlebars as view engine, we need to include that in the main file
 * Sets up handlebars view engine
 */
var handlebars = require('express3-handlebars') //install it first in npm
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
/**
 * This creates a view engine and configures Express to use it by default
 * We specified the default layout (defaultLayout:'main'). That means that
unless you specify otherwise, this is the layout that will be used for any view.
 */
const courses = [
    { 'id': 1, 'name': 'saii' },
    { 'id': 2, 'name': 'manju' },
    { 'id': 3, 'name': 'sall' },
    { 'id': 4, 'name': 'smpo' },
]

/**
 * Note that we no longer have to specify the content type or status code: the view engine will return a content type of text/html and a status code of 200 by default. In the catch all handler, which provides our custom 404 page, and the 500 handler, we have to set the status code explicitly.
 */
app.get('/', function (req, res) {
    // res.send('Second Example');
    res.render('home');
});

app.get('/courses', function (req, res) {
    res.send(courses);
});

app.get('/courses/:id', function (req, res) {
    //searches for the req id in the course array
    let course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        //If you check the Network call in dev tools you can see call failed with 404 and the custom message
        res.status(404);
        res.send('The course with given ID not found')
    } else {
        res.send(course)
    }
});

// 404 catch-all handler (middleware)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});
// 500 error handler (middleware)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started');
});