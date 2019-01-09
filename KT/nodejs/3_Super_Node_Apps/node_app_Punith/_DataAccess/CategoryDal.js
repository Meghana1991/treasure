const fs = require('fs');
var db=require('../Common/db');
exports.SaveCategory=function(category,callback){
    db.InsertCollection(categoryName,category,callback);
}
exports.GetCategories=function(categoryName,callback){
    console.log(categoryName);
    let categories="";
    fs.readFile('./jsonData/app.Category.data.json', (err, data) => {  
        if (err) throw err;
        if(typeof(data)!='undefined' && data.length>0 && data!='')
        categories = JSON.parse(data);
        callback(categories,err);    
    });
}
exports.GetCategorySelectedItems=function(req,callback){
    let items="";
    fs.readFile('./jsonData/app.items.data.json', (err, data) => {  
        if (err) throw err;
       items = JSON.parse(data);
        callback(items,err);    
    });
}

exports.AddCategory = function (req,callback) {
    fs.readFile('./jsonData/app.Category.data.json', (err, data) => {  
        if (err) throw err;
        let Category="";
        if(typeof(data)!='undefined' && data.length>0 && data!=''){
             Category = JSON.parse(data);             
        }        
       let CategoryArray=[];
       if(Category == undefined){
        CategoryArray.push(req.body);
        content=JSON.stringify(CategoryArray);
       }
       else if(Category.length>0){
        Category.push(req.body);
       content=JSON.stringify(Category);
       }       
       else{
        CategoryArray.push(req.body);
            content=JSON.stringify(CategoryArray);
       }
        fs.writeFile("./jsonData/app.Category.data.json", content, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        callback({status:'success'},err);    
    });
}

exports.AddSubCategory = function (req,callback) {
    
    fs.readFile('./jsonData/app.Category.data.json', (err, data) => {  
        if (err) throw err;
        let Category="";
        if(typeof(data)!='undefined' && data.length>0 && data!=''){
            Category = JSON.parse(data); 
            for(var i=0;i<Category.length;i++){
                if(Category[i].categoryId==req.body.categoryId)
                Category[i].subCateGory.push(req.body);
                
            }
            content=JSON.stringify(Category);
            fs.writeFile("./jsonData/app.Category.data.json", content, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
           return  callback({status:'success'},err);  
        }
        else{
            console.log("soryy category notfound");
           return callback({status:'category not found'},err);
        } 
      return callback({status:'Error'},err);
    });

}
