let mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * Schema here actually refers to the DB's schema.With Mongoose, everything is derived from a Schema. Let's get a reference to it.
 */
/**
 * The next step is compiling our schema into a Model.
 * Before we can handle CRUD operations, we will need a mongoose Model. These models are constructors that we define. They represent documents which can be saved and retrieved from our database
 *https://stackoverflow.com/questions/5794834/how-to-access-a-preexisting-collection-with-mongoose
 */
var books = mongoose.model('Booknew', new Schema({
    title: String
}), 'booknew');

/**--------------------------------------------------------------------------------------------------------------
 * Define a new schema
 */
var Schema = mongoose.Schema;
var customSchema = new Schema({
    name: String,
    age: String
});
/**
 * Define a new Model
 */
var pers = mongoose.model('Person', customSchema);
var p1 = new pers({
    name: 'Manj',
    age: '27'
});

exports.getTry = function (req, res, callback) {
    p1.save(function (err) {
        if (err) {return handleError(err);}
        else {res.send('success'); res.end()}
    });
}
exports.getFn = function (req, res, callback) {
    books.find({})
        .exec(function (err, booksResponse) {
            if (err) {
                return;
            }
            if (booksResponse) {
                callback(booksResponse);
            }
        });
}