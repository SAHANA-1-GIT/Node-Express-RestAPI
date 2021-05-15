var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

//Data
var inventory =require('./inventory.json');

//routes
app.get('/api/inventory',function (req,res){
    res.send(inventory);
});

app.delete('/api/inventory',function (req,res){
    inventory = [],
    res.send(inventory);
});

app.delete('/api/inventory/:product',function(req,res){
    let deleteItem = req.params.product;
    inventory = inventory.filter( (element) => {
        return element.name !== deleteItem;
    });
    res.send(inventory);    
});


app.listen(process.env.PORT || 8081);
