var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

//Data
var inventory =require('./inventory.json');

//routes
app.put('/api/inventory',function (req,res){
    inventory = req.body,
    res.send(inventory);
});

app.put('/api/inventory/:product',function(req,res){
    let replaceItemName = req.params.product;
    let newItem = req.body;
   inventory.forEach( item => {
        if(item.name === replaceItemName)
        {
            item.name = newItem.name;
            item.quantity = newItem.quantity
        }
    }); 
    res.json(inventory);
});


app.listen(process.env.PORT || 8081);
