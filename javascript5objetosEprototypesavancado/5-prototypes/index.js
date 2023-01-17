function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => {
       return 'original' + this.nome + ' ' + this.sobrenome;
    }
} 

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('matheus', 'junio');
console.log(p1.nomeCompleto())

//prototype é um objeto criado automaticamente 

Pessoa.prototype.saudacao = 'seja bem vindo';
console.log(Pessoa.prototype.saudacao);
console.dir(p1);