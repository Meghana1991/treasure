const { Pool, Client } = require('pg');
var dbConfig=require('./settings');
const promise = require('bluebird');
const pool = {
    user: dbConfig.dbConfig.user,
    host: dbConfig.dbConfig.host,
    database: dbConfig.dbConfig.database,
    password: dbConfig.dbConfig.password,
    port: dbConfig.dbConfig.port
}

  const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);

const db = pgp(pool); // database instance;
exports.GetData=function(spName,callback){
    db.func(spName)
    .then(data => {
        // data as returned from the function
        callback(data,null);
    })
    .catch(error => {
        callback(null,error);
    });    
}
exports.GetDataWithParams=function(spName,jsonParamsData,callback){
    db.func(spName,jsonParamsData)
    .then(data => {
        // data as returned from the function
        
        callback(data,null);
    })
    .catch(error => {
        callback(null,error);
    });    
}
exports.InsertData=function(spName,jsonParamsData,callback){
    db.func(spName,jsonParamsData)
    .then(data => {
        // data as returned from the function
        callback(data,null);
    })
    .catch(error => {
        callback(null,error);
    });    
}