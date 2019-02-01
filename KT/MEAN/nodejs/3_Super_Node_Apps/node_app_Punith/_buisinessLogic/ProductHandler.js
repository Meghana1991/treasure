var CateGoryDal=require('../_DataAccess/ProductDal');
var httpMsgs=require('../Common/httpMsgs');

exports.AddProduct = function (req,res,callback) {
    CateGoryDal.AddProduct(req,function(response,err){
        callback(response,err);
    });
}
exports.UploadProductDigitalAssets = function (req,res,callback) {
    CateGoryDal.AddProduct(req,function(response,err){
        callback(response,err);
    });
}
