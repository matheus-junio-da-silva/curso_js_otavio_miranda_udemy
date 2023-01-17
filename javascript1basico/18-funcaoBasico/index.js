function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
}
saudacao('matheus');

const variavel = saudacao('matheus');
console.log(variavel); //undefined

function saudacaoReturn(nome) {
    return`Bom dia ${nome}`;
}
const var1 = saudacaoReturn('matheus');
console.log(var1);////certo

function soma(x = 1, y = 1) { // x = 1 caso nao passar valor
    const resultado = x + y;
    return resultado;
}
console.log(soma(1, 2));
const resultado = 4;
console.log(resultado);

const raiz = function (n) {
    return n ** 0.5

};
console.log(raiz(16))

const arrowFunction = n => n ** 0.5; //simplificaçãp, sem chaves, 1 parametro sem parenteses