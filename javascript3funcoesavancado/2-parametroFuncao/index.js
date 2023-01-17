// quando declarada com function argumentos que sustentam todos os argumentos
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    return total;
}
funcao(1, 2, 3, 4, 5, 6); // so funciona quando tem a palavra function, arrow function nao funciona
console.log(funcao(1, 2, 3, 4, 5, 6));

function func(a, b = 2) { // quanto undefined
    console.log(a + b);
}
func(2, 10);

function fun ([a, b, c]) {
    console.log(a, b, c);
}
fun(['matheus', 'junio', 20]);

function conta(operador, acumulador, ...numeros) { // rest operator
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero; 
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '-') acumulador -= numero;

        console.log(acumulador);
    }
}
conta('-', 1, 2, 3, 4, 5);