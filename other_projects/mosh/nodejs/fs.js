const fileSystem = require("fs");

//Sync accepts only directory name
console.log(fileSystem.readdirSync('./')) //[ 'app.js', 'fs.js', 'logger.js', 'path.js' ]

//Async accepts a callback function as second param
fileSystem.readdir('./', function (err, filesSuccess) {
    if (err) {
        console.log("Error occured") //to console this, give invalid path like $ instead of ./
    } 
    else { console.log('Success',filesSuccess) }
})