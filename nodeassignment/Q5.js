var fs= require('fs');

var readFile=fs.createReadStream('text.txt','utf-8');

readFile.on('data',function(data){
    let find="happy"
    let reg= new RegExp(find, "gi");
    if(data.match(reg) === null)
    {
        console.log("No such word found");
    }
    else
    {
        console.log( "No of occurrences: " ,data.match(reg).length);
    }
    
})
