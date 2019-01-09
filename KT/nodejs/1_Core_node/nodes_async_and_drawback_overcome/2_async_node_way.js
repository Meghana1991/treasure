console.log("line 1")
console.log("line 2")
setTimeout(function(){
    console.log("line 3")
    console.log("line 4")
},100)
console.log("line 5")
console.log("line 6")

/**
 * The PHP way -
 * line 1
 * line 2
 * <DELAY>
 * line 3
 * line 4
 * line 5
 * line 6
 */

/**
 * The Node way
 * line 1
 * line 2
 * line 5
 * line 6
 * line 3
 * line 4
 * The node doesnot actually wait for the delay instead it prints the next lines and then once the queue is ready, it picks the response and prints. Hence called as asynchronous programming
 */