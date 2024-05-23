function index (req,res){
    let erro_valor= req.query.erro_valor
    console.log(erro_valor)
    res.render('index.html');
}

function resultado (req,res){
    let v1 = Number(req.body.v1)
    let v2 = Number(req.body.v2)
    let op = req.body.op
    let v3;
    if(isNaN(v1)||isNaN(v2)){
        res.redirect('/?erro_valor=true')
    }
    else{
        v3 = v1 + v2;
        res.render('resultado.html',{v1,v2,op,v3});
    }
}

module.exports = {
    index,
    resultado
}