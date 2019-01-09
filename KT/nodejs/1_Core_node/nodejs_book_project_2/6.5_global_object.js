var globalValue1;

exports.setGlobal = function(value) {
    globalValue1 = value;
    globalValue2 = value;
}

exports.returnValue = function(){
    console.log(global)
    return globalValue2;
}
/**
 * Comment first line of var globalValue1;
 * Then run the below mentioned commands
 * 
 * var one = require('./6_global_object')
 * one.setGlobal(44)
 * var onesum = one.returnValue();
 * 
 * var two = require('./6.5_global_object')
 * two.setGlobal(88)
 * var twosum = two.returnValue();
 * 
 * Here both the files are redefining and modifying the same global variable globalValue1 but the file2 is utilizing the same global variable ie globalValue2
 * 
 * If you redefine the same name global variable in the 6.5 then
 * > NAME SPACE WILL BE CREATED FOR EACH MODULE
 * > THE GLOBAL VALUE WOULD BE UNIQUE TO ITS OWN MODULE
 * > THE CONSOLE OF THE GLOBAL DOESN'T SHOWUP globalvalue1 IN THE CONSOLE.LOG(global)
 * > THE CONSOLE OF THE GLOBAL SHOWS UP globalvalue2 IN THE CONSOLE.LOG(global) as it is present only in ONE module and not being reused or redefined elsewhere.
 * > the globalValue2 will be as per the latest modification ie 88 as the overriding happens.
 */