var express=require('express');
var router=express.Router();
var httpMsgs=require('../Common/httpMsgs');
var categoryHandler=require('../_buisinessLogic/CategoryHandler');

router.post('/AddCategory',function(req,res,next){
    // check header or url parameters or post parameters for token
    httpMsgs.Verifytoken(req,res,function(obj){
        if(obj.success==false){
            httpMsgs.sendJson(req,res,obj);
            return false;
        }
        else if(obj.success==true)
        {
        categoryHandler.AddCategory(req,res, function(response,err){
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
 router.get('/GetCategories',function(req,res,next){
      httpMsgs.Verifytoken(req,res,function(obj){
        if(obj.success==false){
            httpMsgs.sendJson(req,res,obj);
            return false;
        }
        else if(obj.success==true)
        {
            categoryHandler.GetCategories('getcategory',req,res, function(response,err){
                if(err){
                     httpMsgs.show500(req,res, err);
                }
                else{
                    httpMsgs.sendJson(req,res,response);
                }
        
            })
        }
    });
        
 })
 router.post('/GetCategorySelectedItems',function(req,res,next){
    httpMsgs.Verifytoken(req,res,function(obj){
        if(obj.success==false){
            httpMsgs.sendJson(req,res,obj);
            return false;
        }
        else if(obj.success==true)
        {
          categoryHandler.GetCategorySelectedItems(req,res, function(response,err){
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

 router.post('/AddSubCategory',function(req,res,next){
    httpMsgs.Verifytoken(req,res,function(obj){
        if(obj.success==false){
            httpMsgs.sendJson(req,res,obj);
            return false;
        }
        else if(obj.success==true)
        {
            categoryHandler.AddSubCategory(req,res, function(response,err){
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
module.exports=router;
