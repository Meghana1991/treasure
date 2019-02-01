console.log("Starting App");

var process = require('process');
var yargs = require('yargs');
var note = require('../0_Udemy/note')
// console.log(process)

/**
 * This is like getting input from the user
 * Example :  in crsp proj, in package json, there are some commands like this
 * The above command prints
 * a huge object with something called as "argv"
 * If i am interested to know the arguments that are triggered with command then,do the below
 */

/**
* Yargs is more simple than the process.argv
* in command prompt, node .\2_app.js some hi --title "title1" --body "phew"
*/
console.log(process.argv[2]);
console.log(yargs.argv);
console.log(yargs.argv.title);
console.log(yargs.argv.body);

if (process.argv[2] == 'list') {
    console.log('List is your arg')
} else if (process.argv[2] == 'single') {
    note.getNote(yargs.argv.title);
} else {
    console.log(`Your extra arg is ${process.argv[2]}`)
}