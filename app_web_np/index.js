const express = require('express');
const math = require('./util/math');
const app = express();

app.get('/verificar-numero-primo/:n', function(req, res){
    let n = req.params.n;
    let ePrimo = math.verificarNumeroPrimo(n)
    res.send(ePrimo);
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('App rodando na porta '+ PORT);
});

