function criaPessoa(nome, sobrenome, peso = 0, altura = 0) {
    return {
        nome,
        sobrenome,
        peso,
        altura,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(value) {
            valor = value.split(' '); // para um array
            this.nome = valor.shift(); // remover o primeiro
            this.sobrenome = valor.join(); // virar string
            console.log(valor);
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        // getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        } // get so funciona se eu declarar a funcao desse modo
    }
}
// p1 chamou o método fala, entãoa ele é o this
// no caso p1 é o this
// this.nome é mesma cois que p1.nome
const p1 = criaPessoa('matheus', 'junio', 70, 1.8);
console.log(p1.fala('comendo'));
//console.log(p1.imc()); // vai dar erro porque esta pegando so o valor
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'maria oliveira';
console.log(p1.nomeCompleto);
console.log(p1.nome); // maria
console.log(p1.sobrenome);