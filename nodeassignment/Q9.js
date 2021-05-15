var fs = require('fs');
var concat = require('concat-stream');
var arr = concat(function(data) {console.log(data)});


arr.write(fs.readFileSync('text.txt','utf-8').split(" "));
arr.end();







