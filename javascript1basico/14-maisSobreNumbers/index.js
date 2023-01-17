let num1 = 10.7890;
let num2 = 2.5;
console.log(num1.toString() + num2)
console.log(typeof num1)
console.log(num1.toFixed(2))// duas decimais
console.log(Number.isInteger(num1))//se é inteiro
let temp = num1 * 'ola';
console.log(Number.isNaN(temp));//true se string
//ieee 754-2008
let numero1 = 0.7;
let numero2 = 0.1;
numero1 += numero2;
numero1 += numero2;
numero1 += numero2;
console.log(numero1); //nao vai ser inteiro
console.log(Number.isInteger(numero1));
console.log(Number.isInteger(1));
numero1 = (parseFloat(numero1.toFixed(2)))
console.log(numero1)

numero1 = 0.7;
numero2 = 0.1;
numero1 = ((numero1*100) + (numero2*100)) / 100; //0.8 resolvendo a impecisaod
console.log(numero1)
