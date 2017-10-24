
var express = require('express');
var app2 = express();


app2.get('/', function(req, res){
res.send('salut, main page !');


});

app2.get('/contact/:id', function(req, res){
res.send('salut, main page je suis le contact No : ' + req.params.id);


});

app2.listen(3000);
