var express = require('express');
var app = express();

app.get('/home',function(req,res){
    res.send("Hello, World!");
});

var portNo = process.argv[2];
app.listen(portNo);