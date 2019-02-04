var express = require('express');
var User = require('./models/user');
const router = express.Router();

/**
 * Create a jwt token
 */
const jwt = require('jsonwebtoken')
/**
 * Connection to the DB
 */

const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/meandbmanju";

mongoose.connect(db, err => {
    if (err) {
        console.log('Error connecting to db')
    } else {
        console.log('Connected successfully')
    }
})

function verifyTokenFromFE(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized!')
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send('Unauthorized!')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized!')
    }
    req.userId = payload.subject;
    next();
}
/** Here the parents route for all these is /inside */
router.get('/', (req, res) => {
    res.send("Hello from inside Server");
})

/**
 *  From the front-end there is a request coming for GET call asking to search the data in DB, so here we should prepare the query to achieve it. However, I can take the request which is GET and use it for POST, PUT or DELETE as well. It is up to the node. Also, GET comes with different params, so is POST etc but just telling that what request we get from front end can be used for any other purpose as well.
 */

router.post('/register', (req, res) => {
    let userData = req.body;
    //Import the Model user above and create a object of it.
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            /**
             * On success scenario in this BE side, we need to create a jwt
             * by creating a payload
             */
            let payload = {
                subject: registeredUser._id
            }
            let token = jwt.sign(payload, "secretKey")
            res.status(200).send({ token })
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;
    //Directly pick the schema name and find using it
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid Email')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid Email')
                } else {
                    let payload = {
                        subject: user._id
                    }
                    let token = jwt.sign(payload, "secretKey")
                    res.status(200).send({token})
                }
            }
        }
    })
});

router.get('/events', (req, res) => {
    var events = [
        {
            "_id": "1",
            "name": "Auto",
            "description": "AUto Wala",
            "date": "2012"
        }, {
            "_id": "2",
            "name": "Auto",
            "description": "AUto Wala",
            "date": "2012"
        }, {
            "_id": "3",
            "name": "Auto",
            "description": "AUto Wala",
            "date": "2012"
        }, {
            "_id": "4",
            "name": "Auto",
            "description": "AUto Wala",
            "date": "2012"
        }
    ]
    res.json(events)
});
/**
 * The verifyTokenFromFE checks first
 * and if passed then it enters function
 */
router.get('/special', verifyTokenFromFE, (req, res) => {
    var events = [
        {
            "_id": "1",
            "name": "Auto",
            "description": "AUto Wala",
            "date": "2012"
        }, {
            "_id": "2",
            "name": "Auto",
            "description": "AUto Wala",
            "date": "2012"
        }, {
            "_id": "3",
            "name": "Auto",
            "description": "AUto Wala",
            "date": "2012"
        }, {
            "_id": "4",
            "name": "Auto",
            "description": "AUto Wala",
            "date": "2012"
        }
    ]
    res.json(events)
});

module.exports = router;