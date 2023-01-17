// IIFE -> Imediately invoked function expression
// evitar usar o escopo global
// para executá-la desse modo, a funcao precisa estar envolta de parenteses
(function(idade, peso) {
    const nome = 'matheus';
    console.log(nome, idade, peso);
})(20, 70);
