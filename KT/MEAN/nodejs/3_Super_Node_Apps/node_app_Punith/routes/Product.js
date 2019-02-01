var express=require('express');
var router=express.Router();
var httpMsgs=require('../Common/httpMsgs');
var ProductHandler=require('../_buisinessLogic/ProductHandler');
//file upload dependencies
var multer = require('multer');
var path = require('path');
const mkdirp = require('mkdirp');
//Common settings
var commonSettings=require('../Common/settings');

router.post('/AddProduct',function(req,res,next){
    httpMsgs.Verifytoken(req,res,function(obj){
        if(obj.success==false){
            httpMsgs.sendJson(req,res,obj);
            return false;
        }
        else if(obj.success==true)
        {
            ProductHandler.AddProduct(req,res, function(response,err){
                if(err){
                    httpMsgs.show500(req,res, err);
                }
                else{
                    httpMsgs.sendJson(req,res,response);
                }

            })
        }
 })
})

 //Upload logic to write files to repository
 var storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
        const dir = commonSettings.FileRepository+'uploads/101/';
       //cb(null, commonSettings.FileRepository+'uploads/101/')
        mkdirp(dir, err => cb(err, dir));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  var upload = multer({ storage: storage });
//ends here
 router.post('/Upload',upload.array("uploads[]", 12),function(req,res,next){
    httpMsgs.Verifytoken(req,res,function(obj){
        if(obj.success==false){
            httpMsgs.sendJson(req,res,obj);
            return false;
        }
        else if(obj.success==true)
        {
            if(req.files)
                    res.send(req.files);       
                else 
            httpMsgs.sendJson({status:'Errror'},null);
        }
    })
})
 
 module.exports=router;