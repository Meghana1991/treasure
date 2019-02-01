var http = require('http');

var options = {
    host: 'localhost',
    port: 8124,
    path: '/',
    method: 'GET'
};
console.log('--------------------------')
var request = http.request(options, function (res) {
    console.log("success")
    for (counter = 5; counter <= 10; counter++)
        console.log(counter)
});
request.on('error', function (err) {
    console.log('failed')
});
request.end();

/**
> 3 > 2 > 1;
false
> 3 > 2;
true
> true > 1;
false

Now the result makes more sense. What’s happening is that the expression 3 > 2 is
evaluated, returning true. But then the value of true is compared to the numeric 1.
JavaScript provides automatic data type conversion, after which true and 1 are equivalent
values. Hence, true is not greater than 1, and the result is false
 */