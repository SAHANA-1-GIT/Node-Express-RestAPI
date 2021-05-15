var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var data =[];

var urlencodedparser = bodyparser.urlencoded({extended:false});

app.get('/items',function(req,res){
    res.send(data);
});

app.post('/items', urlencodedparser ,function(req,res){
    data.push(req.body);
    res.send(data);
});

app.get('/items/:id',function(req,res){
    var id= req.params.id;
    res.send(data[id]);
});

app.patch('/items/:id', urlencodedparser ,function(req,res){
    data[req.params.id] = req.body;
    res.send(data);
});

app.delete('/items/:id',urlencodedparser ,function(req,res){
    var id= req.params.id;
    data.slice(0, id).concat(data.slice(id + 1, data.length))
    res.send( data)
});

app.listen(3000);