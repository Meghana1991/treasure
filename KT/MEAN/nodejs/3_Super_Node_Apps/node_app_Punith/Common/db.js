var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
var dbConfig=require('../Common/settings');

exports.InsertCollection=function(collectionName,jsonData,callback){
    MongoClient.connect('mongodb://127.0.0.1:27017/PhotoDB', function (err, db) {
        if (err) {
            console.log(err);
            callback(null,err);
        } else {
            var collection = db.collection(collectionName);
            collection.insert(jsonData, function(err, docs) {
                collection.count(function(err, count) {
                    console.log(count);
                    callback(format("count = %s", count),null);
                    db.close();
                });
            });
        }
        db.close();
    });
}

exports.FindCollection=function(collectionName,jsonData){
    MongoClient.connect(dbConfig.dbConfig, function (err, db) {
        if (err) {
            callback(null,err);
        } else {
            var collection = db.collection(collectionName);
            collection.find().toArray(function(err, results) {
                callback(results,null);
                // Let's close the db
                db.close();
            });
        }
        db.close();
    });
}
