// retorne a soma do dobro de todos os pares
// filtrar pares
// dobrar os valores
// reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somentePar = numeros.filter(valor => valor % 2 === 0);
console.log(somentePar); //[ 50, 80, 2, 8, 22 ]
const dobrarValores = somentePar.map(valor => valor * 2);
console.log(dobrarValores); //[ 100, 160, 4, 16, 44 ]
const somarTudo = dobrarValores.reduce((acumulador, valor) => acumulador += valor);
console.log(somarTudo); //324
// acumulador recebe o primeiro valor do array, e o parametro valor recebe o segundo e vai iterando