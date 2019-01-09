/**
 * Sai Ram
 */

var app = require('express')();
var helmetJs = require('helmet');
var GetMeModule = require('./routes/GetMeModuleRouter');
var mongoose = require("mongoose");
var port = 3000;

/**
 * MongoClient in your example is just a Nodejs library that handles connecting to and interacting with a MongoDB database.
 */
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

mongoose.connect("mongodb://localhost/mylib");

let db = mongoose.connection;
//check for db connection
db.once('open',function(){
    console.log('Connected to Mongo Db')
})
//check for db errors
db.on('error', function (err) {
    console.log(err)
})
app.use(helmetJs());
app.use('/', GetMeModule);
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
app.listen(port, function () {
    console.log('Running in this port - '.port)
})