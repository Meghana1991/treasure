const mongoose = require('mongoose');

const schema = mongoose.Schema;

/**
 * This is how a table is supposed to look like in the DB 
 */

const userSchema = new schema({
    email : String,
    password :  String
});

// module.exports = mongoose.model(ModelName, SchemaName, CollectionName)

module.exports = mongoose.model('user', userSchema, 'users')