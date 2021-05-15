var express = require('express');
var app = express();
var date= new Date();

app.get('/year',function(req,res){
    var age = date.getFullYear()-req.query.age;
    var year = `You were born in ${age}.`;
    res.send(year);
});

app.listen(3000);