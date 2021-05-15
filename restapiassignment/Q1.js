var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Data
var inventory =require('./inventory.json');

app.use(bodyParser.json());

//routes
app.get('/api/inventory',function (req,res){
    res.send(inventory);
});

app.get('/api/inventory/:product',function(req,res){
    let inventoryItem = req.params.product;
    inventory.forEach( item => {
        if(item.name === inventoryItem)
            res.json(item);
    });
});


app.listen(process.env.PORT || 8081);
