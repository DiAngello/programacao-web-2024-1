const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express')

app.engine('html', mustacheExpress());
app.set('view engine','html');
app.set('views',__dirname + '/views')

app.get('/', function(req,res){
    res.render('index.html');
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('App rodando ma porta '+ PORT)
});