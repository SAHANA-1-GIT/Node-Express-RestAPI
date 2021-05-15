var fs = require('fs');

//input from command line
var inputText = process.argv.slice(2).join(' ');


var outputFile=fs.createWriteStream(__dirname + '/output.txt');
outputFile.write(inputText);
console.log("The file was saved!");

