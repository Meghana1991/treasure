/**
 * Nodejs is synchronous WITHOUT callbacks or self invoking functions, example take 2_async_node_way.js and rebuild it and see what happens if you put sleep function inside callback(settime) and sleep without callback
 */
/**
 * Outpt : 1,2,5,6,3,4
 */
console.log('THE ASYNC WAY OF THE NODE')
console.log("line 1")
console.log("line 2")
setTimeout(function(){
    console.log("line 3")
    console.log("line 4")
},100)
console.log("line 5")
console.log("line 6")

/**
 * Outpt : 1,2,5,6,3,4
 */
console.log('THE ASYNC WAY OF THE NODE')
console.log("line 1")
console.log("line 2")
setTimeout(function(){
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + 10000);
    console.log("line 3")
    console.log("line 4")
},100)
console.log("line 5")
console.log("line 6")

/**
 * Outputs - 1,2,3,4,5,6
 */
console.log('THE SYNC WAY OF NODE')
console.log("line 1")
console.log("line 2")
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
    console.log('line 3')
    console.log('line 4')
}
sleep(10000);
console.log("line 5")
console.log("line 6")