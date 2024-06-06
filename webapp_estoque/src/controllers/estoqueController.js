function indexView(req, res){
    res.render(`index.html`);
}

function criarContaView(req, res){
    res.render(`usuario_cadastro.html`);
}

function cadastrarUsuario(req, res){
    let usuario = {
        email:req.body.email,
        senha:req.body.senha,
        perfil:req.body.perfil
    }
    console.log(usuario);
    res.redirect('/');
}

module.exports = {
    indexView,
    criarContaView,
    cadastrarUsuario
}