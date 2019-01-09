var CateGoryDal=require('../_DataAccess/CategoryDal');
var httpMsgs=require('../Common/httpMsgs');

exports.SaveCategory = function (req,res,callback) {
   
    var category={ 
        categoryname:req.body.name,
        categoryid:req.body.categoryId
      }
       CateGoryDal.SaveCategory(category,callback);
}

exports.GetCategories = function (categoryName,req,res,callback) {
       console.log( JSON.stringify( req.body));
        CateGoryDal.GetCategories(categoryName,function(response,err){
           callback(response,err);
       });
    
}
exports.GetCategorySelectedItems = function (req,res,callback) {
    CateGoryDal.GetCategorySelectedItems(req,function(response,err){
        callback(response,err);
    });
}

exports.AddCategory = function (req,res,callback) {
    CateGoryDal.AddCategory(req,function(response,err){
        callback(response,err);
    });
}

exports.AddSubCategory = function (req,res,callback) {
    console.log( JSON.stringify( req.body));
    CateGoryDal.AddSubCategory(req,function(response,err){
        callback(response,err);
    });
}
