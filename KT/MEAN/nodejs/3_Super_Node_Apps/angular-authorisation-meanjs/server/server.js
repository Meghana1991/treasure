var app = require('express')();
var bparser = require('body-parser');

const cors = require('cors')
/* Import the Router here */
var routes = require('./routes');

const PORT = 3000;
app.use(cors())
app.use(bparser.json());

app.use('/inside', routes)
app.get('/', function (req, res) {
    res.send("Hello from the server")
});

app.listen(PORT, function () {
    console.log('Listening to Port ', PORT)
});