var fs = require('fs');
var filename= 'text.txt';
fs.readFile(filename,'utf-8',function(err,data){
    console.log("Contents of the file: \n");
    console.log(data);
})