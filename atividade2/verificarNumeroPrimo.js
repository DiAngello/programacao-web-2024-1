/*Implemente uma função com a seguinte assinatura: verificarNumeroPrimo(n);
A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso não seja primo.*/

function verificarNumeroPrimo(n){
    if (n <= 1){
        return false;
    }
    if (n <= 3){
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0){
        return false;
    }
    let i = 5;
    while (i * i <= n){
        if(n % i === 0 ||n %(i+2)===0){
            return false;        
        }
        i +=6;
    }
    return true;
};

console.log(verificarNumeroPrimo(0)); //false
console.log(verificarNumeroPrimo(1)); //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //falsee

