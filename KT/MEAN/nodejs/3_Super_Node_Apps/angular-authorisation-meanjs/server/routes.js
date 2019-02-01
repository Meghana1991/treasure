var express = require('express');
const router = express.Router();

/**
 * Connection to the DB
 */

const mongoose = require('mongoose');
const db = "mongodb://admin:admin123@ds257551.mlab.com:57551/meandbmanju";

mongoose.connect(db, err => {
    if (err) {
        console.log('Error connecting to db')
    } else {
        console.log('Connected successfully')
    }
})

/** Here the parents route for all these is /inside */
router.get('/', (req, res) => {
    res.send("Hello from inside Server");
})

module.exports = router;