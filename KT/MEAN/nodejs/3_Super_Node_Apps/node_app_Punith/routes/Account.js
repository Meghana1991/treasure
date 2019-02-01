var express=require('express');
var router=express.Router();
var AccountHandler=require('../_buisinessLogic/AccountHandler');
var httpMsgs=require('../Common/httpMsgs');

// router.get('/',function(req,res,next){
//    //res.json({ message: 'hooray! welcome to our api!' });   
//    res.render('index.html')
// })
router.post('/logon',function(req,res,next){
    var data=req.body;
    console.log(req.body);
    AccountHandler.authorizeUser(data.loginName,data.passWord,function(response){
        httpMsgs.sendJson(req,res,response);
    })
})
router.get('/GetToken',function(req,res,next){
    AccountHandler.GetToken(function(response){
        httpMsgs.sendJson(req,res,response);
    })
})
router.post('/Home',function(req,res,next){
   res.render('index.html',{val:getData()})
})
router.post('/AssessMents',function(req,res,next){
    res.render('index.html',{val:getData()})
 })

module.exports=router;

//User defined functions
//get some server data for sending it to the client
var getData = function() {
    return Math.random().toString();
}
