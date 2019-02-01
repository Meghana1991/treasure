/**
 * Sai Ram
 */

var app = require('express')();
/**
 * For the express js to run without any security hacks or issue, we need to
 * use helmet.js. This helps in multiple security concerns
 * https://helmetjs.github.io/
 */
var helmetJs = require('helmet');
var GetMeModule = require('./routes/GetMeModuleRouter');
var PostMeModule = require('./routes/PostMeModuleRouter');
app.use(helmetJs());

var port = 3000;

/**
 * Import the custom module functionalities here. If there are multiple modules and each module has multiple
 * routes then in such scenarios, import those modules and trigger it using .use('path)
 */
app.use('/moduleGetCall/',GetMeModule); //Parent route is moduleGetCall
app.use('/modulePostCall/',PostMeModule); //Parent route is modulePostCall

app.get('/', function (req, res) {
    res.send('Welcome You')
})
app.listen(port, function () {
    console.log('Running in this port - '.port)
})