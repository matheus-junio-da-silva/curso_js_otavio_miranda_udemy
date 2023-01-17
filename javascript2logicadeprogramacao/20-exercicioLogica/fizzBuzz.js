function fizzBuzz(numero) {
    if (isNaN(numero)) return numero;
    let num = parseFloat(numero);
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 3 === 0 ) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}
num = 100
for (let i = 0; i <= num; i++) {
    console.log(i, fizzBuzz(i));
}