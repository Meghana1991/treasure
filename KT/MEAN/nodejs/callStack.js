console.log('Line 1')
console.log('Line 2')
setTimeout(function () {
    console.log('Line 3')
}, 2000)

var someone = function () {
    setTimeout(function () {
        console.log('Line 7')
    })
}();

setTimeout(function () {
    console.log('Line 4.2')
})

setTimeout(function () {
    console.log('Line 4')
}, 0)

console.log('Line 5')

var some = function () {
    console.log('Line 6')
}();

/**
 * The statements sit in call stack
 * The callbacks sit in the API section(Node APIs box).
 * The callbacks will be resolved and pushed to queue.
 * The first priority is always the call stack. Once the contents of stack is empty then it picks from the queue which is why the setTimeout(fn,0) prints after simple commands
 */