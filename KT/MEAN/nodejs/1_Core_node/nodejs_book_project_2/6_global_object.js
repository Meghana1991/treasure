var globalValue1;
var globalValue2;
exports.setGlobal = function (value) {
    globalValue1 = value;
    globalValue2 = value;
}

exports.returnValue = function () {
    console.log(global)
    return globalValue1;
    return globalValue2;
}

/**
 * Usually as in the case of Javascript the window object will hold all the variables defined and will be available across all the libraries or other files but in node the global object is different than window
 *  I mentioned that global is like the windows object in a browser, but there are key differences—and
    not just the methods and properties available. The windows object in a
    browser is truly global in nature. If you define a global variable in client-side JavaScript,
    it’s accessible by the web page and by every single library. However, if you create a
    variable at the top-level scope in a Node module (a variable outside a function), it only
    becomes global to the module, not to all of the modules.
 */