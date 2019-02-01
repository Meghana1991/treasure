var express = require('express');
var router = express.Router();
var BookHandler = require('../handlers/BookHandler');

/**
 * In POSTMAN -
 * http://localhost:3000/modulePostCall/postBooks
 * Add in the body - {"name":"meg"}
 */
router.post('/postBooks', function (req, res, next) {
    console.log(req.body,"postbooks")
    BookHandler.postBooks(req,res, function(response,err){
        if (response) res.send(JSON.stringify(response));
        res.end();
    });
})

module.exports = router;