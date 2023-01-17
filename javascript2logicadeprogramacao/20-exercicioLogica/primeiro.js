// escreva uma funcao que recebe 2 numeros e retorne o maior deles
function retornaMaior (num1, num2) {
    return num1 > num2 ? num1 : num2;
}

const refatorado = (x, y) => x > y ? x : y;
// arrow func 1 linha nao precisa de chaves e return
console.log(retornaMaior(5,10));

console.log(refatorado(8, 4));