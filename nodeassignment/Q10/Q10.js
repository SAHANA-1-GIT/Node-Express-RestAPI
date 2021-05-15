var fs = require('fs');

//input from command line
var filename= process.argv[2];
var inputText = process.argv.slice(3).join(' ');


fs.writeFile(filename,inputText,(err)=> {
     if(err)
          console.log(err);
     console.log("The file was saved!");
     var readMyFile=fs.readFileSync(filename,'utf-8');
     console.log(readMyFile);
});




