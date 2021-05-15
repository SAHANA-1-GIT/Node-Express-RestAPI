var fs = require('fs');
fs.readFile('text.txt','utf-8',function(err,data){
    let reg = /\d+(\.\d+)?/g;                 //matches both integer and flaoting points
    let digits= data.match(reg).map(Number);
    let sum =0;
    digits.forEach(element => {
        sum+=element;
    });
    console.log("The sum of the digits from the text file: "+sum);

})