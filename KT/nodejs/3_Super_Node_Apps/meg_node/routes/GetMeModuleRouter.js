var express = require('express');
var router = express.Router();
var BookHandler = require('../handlers/BookHandler');
/**
 * http://localhost:3000/moduleGetCall/getBooks
 */
router.get('/getBooks', function (req, res, next) {
    // res.send("Books page - moduleGetCall/getBooks");
    BookHandler.getBooks('getbooks', req, res, function (response, err) {
        if (response) res.send(JSON.stringify(response));
        res.end();
    });
});

/**
 *http://localhost:3000/moduleGetCall
 */
router.get('/', function (req, res, next) {
    res.send("Books page - moduleGetCall");
});

module.exports = router;