/*
operadores logicos
&& -> and e
|| -> or ou
! -> not nao
*/
const expressao = true && true;
console.log(expressao); //true

const expressaoOr = false || true;
console.log(expressaoOr); // true

const usuario = 'matheus';
const senha = '123456';
const vaiLogar = usuario === 'matheus' && senha === '123456';
console.log(vaiLogar);

console.log(!false);//true, inversao