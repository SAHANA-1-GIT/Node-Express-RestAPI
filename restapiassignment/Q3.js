var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

//Data
var inventory =require('./inventory.json');

//routing
app.post('/api/inventory',function (req,res){
    inventory.push(req.body),
    res.send(inventory);
});


app.listen(process.env.PORT || 8081);
