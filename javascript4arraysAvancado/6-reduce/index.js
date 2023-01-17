// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     acumulador += valor;
//     console.log(acumulador, valor);
//     return acumulador; // sempre tenho que retornar para que nao seja undefined
// }, 0); // valor inicial do acumulador

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;

}, []); 
console.log(total);

// retorne a pessoa mais velha
const pessoas = [
    { nome: 'luis', idade: 62},
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'leticia', idade: 19},
    { nome: 'rosana', idade: 72},
    { nome: 'wallace', idade: 47},
];
// o acumulador pega o primeiro valor para si
// o acumulador vai ser o valor retornado
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor; // se retornar 'valor' o acumulador sera o valor do 'valor'
})

console.log(maisVelha)








