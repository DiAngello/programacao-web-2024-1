function calcular(v1,v1,op){
    let resultado;
    switch(op){
        case '+':
            resultado = v1+v2;
            break;
        case '-':
            resultado = v1-v2;
            break;
        case '*':
            resultado = v1*v2;
            break;
        case '/':
            resultado = v1/v2;
            break;
    }
    return resultado;
}

function nomeOperador(op){
    let nomeOperador;
    switch(op){
        case '+':
            nomeOperador = "adição"
            break;
        case '-':
            nomeOperador = "subtração";
            break;
        case '*':
            nomeOperador = "multiplicação";
            break;
        case '/':
            nomeOperador = "divisão";
            break;
    }
    return resultado;
}

module.exports={
    calcular,
    nomeOperador
}