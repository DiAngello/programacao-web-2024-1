/*Implemente um aplicativo web com as seguintes rotas:

'/adicionar/:id/:nome/:qtd' - Adiciona um novo produto ao estoque
'/listar' - Lista todos os produtos do estoque
'/remover/:id' - Remove um produto do estoque
'/editar/:id/:qtd' - Altera a quantidade de um produto do estoque*/

const express = require('express');
const estoque = require('./src/estoque');
const app = express();

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(p);
    res.send(p);
});

app.get('/listar', function (req, res) {
    res.send(estoque.listarProdutos());
})

app.get('/remover/:id', function (req, res) {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(`Item ${id} removido`);
});

app.get('/editar/:id/:qtd', function (req, res) {
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.editarProduto(id, qtd);
    res.send(`Quantidade do produto ${id} editada para ${qtd}`);
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});