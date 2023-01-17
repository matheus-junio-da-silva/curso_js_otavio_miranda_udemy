const nome = 'matheus';

for (let i = 0;i < nome.length; i++) {
    console.log(nome[i]);
}

for (let i in nome) {
    console.log(nome[i]);
}

console.log('ola');

for (let valor of nome) {
    console.log(valor);
}

const name = ['luiz', 'otavio', 'henrique'];

name.forEach(function (valor, indice, array){
    console.log(valor, indice, array)
});