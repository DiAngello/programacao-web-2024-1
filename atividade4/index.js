/*No seu repositório de atividades no github, crie uma pasta atividade4 e implemente uma aplicação web com as rotas:
/somar/:a/:b
/subtrair/:a/:b
/multiplicar/:a/:b
/dividir/:a/:b
Que devem retornar o valor equivalente da operação considerando os valores a e b de entrada pela URL.
A aplicação deve conter um arquivo index.js na raiz e um módulo calculadora.js na pasta util.*/

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
    res.send(`${x} + ${y} = ${c}`);
});

app.get('/subtrair/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.subtrair(x, y);
    res.send(`${x} - ${y} = ${c}`);
});

app.get('/multiplicar/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.multiplicar(x, y);
    res.send(`${x} * ${y} = ${c}`);
});

app.get('/dividir/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.dividir(x, y);
    res.send(`${x} / ${y} = ${c}`);
});

