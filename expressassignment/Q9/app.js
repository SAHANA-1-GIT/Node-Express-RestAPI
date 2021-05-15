var express = require('express');
var fs= require('fs');
var app = express();

const port = process.argv[2];
const filename = process.argv[3];

app.get('/books',function(req,res){
    fs.readFile(__dirname + "\\" +filename,'utf-8',function(err,data){
        if(err)
            throw err;
        else
        {
            res.json(data);
        }
    });
});

app.listen(port);