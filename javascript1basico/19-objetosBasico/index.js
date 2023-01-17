const array = [1,2,3];
array.push(4);
array[0] = 'luiz';
//array = 'outra' nao retribuir const
console.log(array);
const objeto = {
    nome : 'matheus',
    sobrenome : 'junio',
    idade : 21,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi e sua idade é: ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};
console.log(objeto.fala());
console.log('ola')
console.log(objeto.incrementaIdade());
console.log(objeto.fala());

/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}*/
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa1 = criaPessoa('matheus','junio','21');
const pessoa2 = criaPessoa('lara','maria','24');
console.log(pessoa1, pessoa2);