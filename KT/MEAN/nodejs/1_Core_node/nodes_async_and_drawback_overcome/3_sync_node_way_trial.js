console.log("line 1")
console.log("line 2")
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}
sleep(10000);
console.log("line 5")
console.log("line 6")

/**
 * line 1
 * line 2
 * DELAY for 10 seconds
 * line 5
 * line 6
 */
