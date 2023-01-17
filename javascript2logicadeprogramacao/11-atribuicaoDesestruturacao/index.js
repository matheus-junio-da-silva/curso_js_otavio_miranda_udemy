let a = 'A'; 
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);// BCA

[a, b, c] = [1, 2, 3];

console.log(a, b, c);

let numeros = [4, 5, 6];
[a, b, c]  = numeros
console.log(a, b, c);
 
const nums = [10,20,30,40,50];
const [primeiroNumero, segundoNumero, ...resto] = nums;
console.log(primeiroNumero, segundoNumero); //10 20
console.log(resto); //[ 30, 40, 50 ]
// dois sentidos ... rest, ..spread

numeros = [10,20,30,40,50];
const [um, , tres, , cinco] = numeros; // espaco pula indice
console.log(um, tres, cinco); //10 30 50

numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][2]);
const [,[,,seis]] = numeros;
console.log(seis);// 6
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
