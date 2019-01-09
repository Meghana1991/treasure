var sum = 0; //Its global variable which is why it adds on every time to sum
var add = function () {
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
    return this; // This (this = add func) will sit in windows object
} 
/**
 * Input - add(1).add(2,3).add(1,3,5)
 * Result - 15
 */