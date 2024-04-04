/*Implemente a função transporMatriz(A);
A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta;*/

function transporMatriz(A) {
    console.log("Matriz Original:");
    for (let i = 0; i < A.length; i++) {
        console.log(A[i].join(' '));
    }

    console.log("\nMatriz Transposta:");
    for (let i = 0; i < A[0].length; i++) {
        let linhaTransposta = [];
        for (let j = 0; j < A.length; j++) {
            linhaTransposta.push(A[j][i]);
        }
        console.log(linhaTransposta.join(' '));
    }
}

const A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(A);
