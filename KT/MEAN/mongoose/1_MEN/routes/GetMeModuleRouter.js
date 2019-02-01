var express = require('express');
var router = express.Router();
var BookHandler = require('../handlers/BookHandler');
/**
 * http://localhost:3000/getCall
 */
router.get('/getCall', function (req, res, next) {
    BookHandler.getFn(req, res, function (response) {
        if (response) {
            res.send(JSON.stringify(response));
            res.end();
        }
    });
});

router.get('/getTry', function (req, res, next) {
    BookHandler.getTry(req, res, function (response) {
        if (response) {
            res.send(JSON.stringify(response));
            res.end();
        }
    });
});
/**
 *http://localhost:3000/
 */
router.get('/', function (req, res, next) {
    res.send("Welcome there");
});

module.exports = router;