const express = require ('express');
const calc = require ('./util/calculadora');
const app = express();

const PORT = 8080;
app.listen(PORT, function(){
    console.log('App rodando na porta '+ PORT);
});

app.get('/somar/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.somar(x, y);
    res.send(`${c}`);
});

app.get('/subtrair/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.subtrair(x, y);
    res.send(`${c}`);
});

app.get('/multiplicar/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.multiplicar(x, y);
    res.send(`${c}`);
});

app.get('/dividir/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.dividir(x, y);
    res.send(`${c}`);
});

