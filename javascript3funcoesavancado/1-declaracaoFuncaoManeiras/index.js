// declaracao de funcao ( function hoisting)
// eleva a funcao e a variavel var para o topo do codigo
// funcoes abaixo se divergem no this
falaOi();
function falaOi() {
    console.log('oi');
}

// firt-class objects (objetos de primeira classe)
// function expression
const souUmDado = function () {
    console.log('SOU UM DADO')
};

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);// funcao como parametro

// arrow function , na verdade function expression curta

const funcaoArrow = () => {
    console.log('sou uma arrow function');
}
funcaoArrow();

// dentro de um objeto
const obj = {
    falar: function() {
        console.log('estou falando...');
    },
    falarModerno() {
        console.log('nova forma de falar...')
    }
}
obj.falar();
obj.falarModerno();