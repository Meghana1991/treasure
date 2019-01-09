var httpMsgs=require('../Common/httpMsgs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const common=require('../Common/settings');
var trim = require("trim"); 
exports.authorizeUser=function(loginName,password,callback){
    var usersData;
    fs.readFile('./jsonData/app.users.json', (err, data) => {  
        if (err) throw err;
        if(typeof(data)!='undefined' && data.length>0 && data!=''){
        usersData=JSON.parse(data);
         for(var i=0;i<usersData.length;i++){
            if(usersData[i].loginName==loginName &&  password==usersData[i].passWord){
                const payload = { admin:loginName  };
                var token = jwt.sign(payload, common.secret, {
                    expiresIn : common.secretKeyExpires // expires in 24 hours
                  });
                  console.log("succe");
                return   callback({ 
                statusCode:'S001',
                success: true,
                message:'your token wil be expired in'+ common.secretKeyExpires + '-seconds', 
                token: token ,
                statusMessage:'success',
                userName:loginName,
                email:'',
                businessName:'',
                phoneNo:'',
                address:''
            });
            
            }
        }
        callback({statusCode:'E001', success: false,message:'Authentication failed. User not found.', token: "" });
        }
        
    })
    

}
exports.GetToken=function(callback){
    const payload = { admin:'punith'};
    var token = jwt.sign(payload, common.secret, {
        expiresIn : common.secretKeyExpires // expires in 24 hours
      });
    return  callback({ success: true,message:'your token wil be expired in'+ common.secretKeyExpires + '-seconds', token: token });
}
