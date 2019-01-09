var accountDal=require('../_DataAccess/AccountDal');
exports.authorizeUser=function(loginName,password,callback){
accountDal.authorizeUser(loginName,password,function(response){
    callback(response);
})

}
exports.GetToken=function(callback){
    accountDal.GetToken(function(response){
        callback(response);
    })
}