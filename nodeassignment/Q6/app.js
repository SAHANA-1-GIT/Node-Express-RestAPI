//var calculator = require('./calculator.js'); 

var addition =  require('./operations/sum.js');
var multiplication =  require('./operations/multiplication.js');
var moment = require('moment');

console.log("Today is : ",moment().format('LLLL'));
console.log("The sum of 3 & 7 is: "+addition.sum(3,7));
console.log("The multiplication of 3 & 7 is: "+multiplication.multiplication(3,7));