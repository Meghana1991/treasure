var server = require("./b_custom_server"); // this is a custom server js file
server.start();

/**
 * node c_index.js
 */
/**
 * We still have only the very first part of our application in place:
we can receive HTTP requests. But we need to do something with
them - depending on which URL the browser requested from our
server, we need to react differently.
 */