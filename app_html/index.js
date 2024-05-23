const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express')

app.engine('html', mustacheExpress());
app.set('view engine','html');
app.set('views',__dirname + '/views')

app.use(express.urlencoded({extended: true}))
app.use('/', require('./routes/calculadoraRoutes'))

const PORT = 8080;
app.listen(PORT, function(){
    console.log('App rodando ma porta '+ PORT)
});