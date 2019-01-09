
var express=require('express');
var path=require('path');
var bodyparser=require('body-parser');

//Producttion environ ment
var compression = require('compression');
var helmet = require('helmet');
//session management
var session = require('express-session');
var Product=require('./routes/Product');
var Category=require('./routes/Category');
var Account=require('./routes/Account');
var Assessment=require('./routes/Assessment');
var Home=require('./routes/Home');
var tasks=require('./routes/tasks');
//Common settings
var commonSettings=require('./Common/settings');

var app=express();
//Set the port value
var port=3000;
// //view Engine like Handlebars
// app.set('src',path.join(__dirname,'client'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//set static folder
// app.use(express.static(path.join(__dirname,'client')));
app.use(helmet());
app.use(compression()); //Compress all routes
//body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//Initilize session
//app.use(session({secret: 'ssshhhhh'}));

//to use static file in project directory
//app.use(express.static('client/dist'))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', commonSettings.clientApp);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//Cross  origin
// specify the folder
//app.use(express.static(path.join(commonSettings.FileRepository, 'uploads')));

//uploading file
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,x-access-token, Content-Type, Accept");
    
    if (req.method === "OPTIONS") 
        res.send(200);
    else 
        next();
    
  });

//ends here
app.use('/cat/',Category);
app.use('/prod/',Product);
app.use('/account/',Account);
app.use('/tasks',tasks);

app.get('/',function(req,res){
    res.send('Welcome You')
})

app.listen(port,function(){
      console.log('running' + port + "," + path);
});
