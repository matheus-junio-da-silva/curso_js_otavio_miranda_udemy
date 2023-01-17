// recebe a mesma quantidade de valores porem alterados
// dobre os numeros
// map é tipo filter mas é para quando voce quer alterar valor
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor, indice, array) => {
    return valor * 2;
})

console.log(numerosEmDobro);

const pessoas = [
    { nome: 'luis', idade: 62},
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'leticia', idade: 19},
    { nome: 'rosana', idade: 32},
    { nome: 'wallace', idade: 47},
];
const nomes = pessoas.map((obj) => ({idade: obj.idade})); // arrow com objetos
console.log(nomes);
const nomeComId = pessoas.map((obj, indice) => {
    newObject = {...obj};
    newObject.id = (indice + 1) * 1000;
    return newObject;
})
console.log(nomeComId);
console.log(nomeComId);
console.log(pessoas);