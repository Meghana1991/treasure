console.log(module);

/**
 * module is a object which has many properties
 * exports is also a property which makes this file exported ie can be imported in other files
 */

module.exports.age = 25;

module.exports.addNote = function () {
    return 'New not'
}

module.exports.getNote = function (title) {
    console.log(`Title is ${title}`)
}