var BooksDatabase = require('../database/BookDB');

exports.getBooks = function (booksName, req, res, callback) {
    console.log(JSON.stringify(req.body));
    BooksDatabase.getbooks(booksName, function (response, err) {
        callback(response, err);
    });
}

exports.postBooks = function (req, res, callback) {
    console.log(JSON.stringify(req.body));
    BooksDatabase.addBookName(req, function (response, err) {
        callback(response, err);
    });
}