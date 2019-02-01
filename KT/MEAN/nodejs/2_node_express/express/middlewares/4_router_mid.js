/**
 * Real time uses here
 * 1) If the header type is not xauth then it goes to if block and next('route') will be only for GET POST PUT DELETE so it goes to next GET
 * 2) If the x-auth is givn thn see what happens
 */

const express = require('express');
const app = express();
var router = express.Router()

router.use(function (req, res, next) {
    //req.headers['x-auth'] = 'osdds';
    if (!req.headers['x-auth']) {
        console.log('if')
        return next('route')
    } else {
        console.log('else')
        next()
    }
})

// use the router and 401 anything falling through
app.use('/admin', router, function (req, res) {
    console.log("next use")
    res.sendStatus(401)
})

router.get('/', function (req, res) {
    console.log('first get')
    res.send('hello, user!')
})

app.use('/', router)
app.listen(3000)