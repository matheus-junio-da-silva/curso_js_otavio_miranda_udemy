const frutas = ['pera', 'maca', 'uva'];

for (let i in frutas) { // lê indice ou chaves
    console.log(frutas[i]);
} 

const pessoa = {
    nome: 'matheus',
    sobrenome: 'junio',
    idade: 30
}
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}