const fs = require('fs');
var db=require('../Common/db');

exports.AddProduct = function (req,callback) {
    fs.readFile('./jsonData/app.items.data.json', (err, data) => {  
        if (err) throw err;
        let items="";
        if(typeof(data)!='undefined' && data.length>0)
       items = JSON.parse(data);
        
       let itemArray=[];
       if(items == undefined){
        itemArray.push(req.body);
        content=JSON.stringify(itemArray);
       }
       else if(items.length>0){
         items.push(req.body);
         content=JSON.stringify(items);
       }       
       else{
        itemArray.push(req.body);
       content=JSON.stringify(itemArray);
       }
        fs.writeFile("./jsonData/app.items.data.json", content, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        callback({status:'success'},err);    
    });
}
exports.UploadProductDigitalAssets=function(req,callback){
    try{

    }
    catch(e){console.log(e)} 
}