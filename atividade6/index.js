/*A aplicação deve possuir uma rota "/" que renderiza um formulário implementado no arquivo "views/index.html";
O formulário deve possuir os campos nome, endereço, telefone e data de agendamento.
Os dados do formulário devem ser enviados para a rota (post) "/dados" que deve renderizar a página "views/dados.html" apresentando os dados digitados no form.
OBS1: na tag form, o atributo action é igual a "/dados" e o atributo method é igual a "post".
OBS2: as páginas .html devem utilizar o BS5.*/

const express =  require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index.html');
});

app.post('/dados', function(req,res){
    let dados = req.body;
    res.render('dados.html',{dados});
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log("App rodando na porta " + PORT);
});


