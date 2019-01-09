var express = require('express');
var exphbs  = require('express3-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
var fortuneCookies = ['Good day', 'Nice day'];

app.get('/', function (req, res) {
    //Math.random() Return a random number between 0 (inclusive) and 1 (exclusive):. Math.random();
    //The Math.floor() function returns the largest integer less than or equal to a given number.
    //Math.floor(1.23) gives 1
    //Math.floor(1.93) gives 1
    var fortune = fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
    res.render('home',{'fortune' : fortune});
});
 
app.listen(3000);