var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');


app.get('/',function(req,res){
    res.send("Welcome!");
});

app.get('/form',function(req,res){
    res.render('index');
});

app.post('/form', urlencodedParser ,function(req,res){
    var result = req.body.str.split("").reverse().join('');
    res.render('index', {result: result});
});

app.listen(3000);