// retorne os numeros maiores que 10
const numeros =  [5 , 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) { // recebe valor, indice, array inteiro
    console.log(valor, indice, array);
    return valor > 10
}
// retornar boolean para filter
// filter faz uma iteracao 
//filter sempre retornar um novo array, com a mesma quantidade ou menos.
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

const pessoas = [
    { nome: 'luis', idade: 62},
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'leticia', idade: 19},
    { nome: 'rosana', idade: 32},
    { nome: 'wallace', idade: 47},
];
const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoaComNomeGrande)
// lembrando que filter sempre vai retornar um array
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDeCinquentaAnos);

const nomeTerminadoEmA = pessoas.filter((obj) => {
   return obj.nome.toLowerCase().endsWith('a');
})
console.log(nomeTerminadoEmA);