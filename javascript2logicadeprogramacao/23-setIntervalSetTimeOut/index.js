function mostraHora() {
    let data = new Date();
    return data.toLocaleString('pt-BR', {hour12: false});
}
console.log(mostraHora());

/*function funcaoDoInterval() {
    console.log(mostraHora());
}*/

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000); //passar a referencia, funcao sem parenteses

setTimeout(function() {
    clearInterval(timer);
}, 0000); // executa apenas uma vez por 3 segundos
