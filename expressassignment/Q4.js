var express = require('express');
var app = express();
var date = new Date();

const PORT = process.env.PORT || 8080;

app.get('/',function(req,res){
    res.send("Hello, World!");
});

app.get('/time',function(req,res){
    var isoTime = "Time in ISO format: " +date.toISOString();
    res.send(isoTime);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});