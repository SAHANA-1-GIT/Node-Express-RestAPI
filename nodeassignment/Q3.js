var fs = require('fs');
var path= require('path');

fs.readdir(__dirname, function(err,files){
    files.forEach(file =>{
        if(fs.lstatSync(path.resolve(__dirname,file)).isDirectory())
        {
            console.log('DIR:' + file);
        }
        else
        {
            console.log('FILE:' + file );
        }
    });
});