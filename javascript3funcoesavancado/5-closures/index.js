function retornaFuncao() {
    const nome = 'matheus';
    return function () {
        return nome; // acesso a tres escopos, closure é o dela, 
    }
}
const funcao = retornaFuncao();
console.dir(funcao);