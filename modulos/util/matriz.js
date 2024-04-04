function transporMatriz(A) {
    console.log("Matriz Original:");
    for (let i = 0; i < A.length; i++) {
        console.log(A[i].join(' '));
    }

    console.log("Matriz Transposta:");
    for (let i = 0; i < A[0].length; i++) {
        let linhaTransposta = [];
        for (let j = 0; j < A.length; j++) {
            linhaTransposta.push(A[j][i]);
        }
        console.log(linhaTransposta.join(' '));
    }
}

module.exports = {
    transporMatriz
}