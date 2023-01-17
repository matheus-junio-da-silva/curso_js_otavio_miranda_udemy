function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}
const l1 = criaPessoa('matheus', 'joao');
console.log(l1);

function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('ola');
console.log(olaMundo('mundo'));

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const multiplicado = duplica(9);
console.log(multiplicado);