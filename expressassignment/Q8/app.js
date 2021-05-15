var express= require('express');
var app= express();
app.set('view engine', 'pug');

app.get('/home',function(req,res){
    res.render('index',{date:new Date().toDateString()});
});

var port = process.argv[2];
app.listen(port);