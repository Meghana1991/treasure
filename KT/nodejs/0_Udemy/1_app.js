console.log("Starting app");

/**
 * Visit the www.nodejs.org
 * Pick any guy from the list
 * Use here
 */

/**
 * Start using the OS
 */

var os = require('os');
var info = os.userInfo();
console.log(info)

var fs = require('fs');
fs.appendFile('hello.txt', 'Hiii Sai ' + info.username + '!');
//This is es6 feature of string as shown below
fs.appendFile('hello.txt', `Hiii Sai ${info.username}`);

/**
 * import file 
 */
var note = require('./note');
console.log(note.age);
console.log(note.addNote());

/**
 * Lodash
 */
var _ = require('lodash');
console.log(_.isString(true))
console.log(_.isString('test string'));
console.log(_.uniq([1,2,2,'some','phew','some']))
console.log(_.uniq([1,2]))