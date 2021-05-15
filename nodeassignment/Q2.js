var fs= require('fs');
var args= process.argv[2];
var readFile= fs.readFileSync( args,'utf-8');
console.log(readFile);