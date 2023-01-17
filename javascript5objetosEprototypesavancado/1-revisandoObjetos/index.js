// literal string '', array [] 
const pessoa = {
    nome: 'matheus',
    sobrenome: 'junio'
};
console.log(pessoa.nome); // matheus
console.log(pessoa['nome']); // matheus

const chave = 'nome';
console.log(pessoa[chave]); // matheus

// new object === {}
const people = new Object();
people.nome = 'matheus';
people.sobrenome = 'junio';
people.idade = 21;

console.log(people.nome); // matheus

people.falarSobrenome = function() {
    console.log(this.sobrenome);
}
people.falarSobrenome(); // junio

people.getDataNascimento = function() {
    const data = new Date();
    const ano = data.getFullYear();
    const dataNascimento = ano - this.idade;
    return dataNascimento;
}

console.log(people.getDataNascimento()); // 2001

// em array pega o indice em objeto a chave
for (let chave in people) {
    console.log(chave); //nome sobrenome idade falarSobrenome getDataNasciment   
}

for (let chave in people) {
    console.log(people[chave]); //nome sobrenome idade falarSobrenome getDataNasciment   
}

// factory function / constructor functions/ classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome} é legal`;
        }
    }
}
const p1 = criaPessoa('matheus', 'junio');
console.log(p1.nomeCompleto); 

function PessoaConstrutora(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Object.freeze(this)
}

const p2 = new PessoaConstrutora('joana', 'maria');
console.log(p2); //PessoaConstrutora { nome: 'joana', sobrenome: 'maria' }
p2.nome = 'julia';
console.log(p2); //PessoaConstrutora { nome: 'julia', sobrenome: 'maria' }
Object.freeze(p2) // nao alterar mais
p2.nome = 'joaquina';
console.log(p2); //PessoaConstrutora { nome: 'julia', sobrenome: 'maria' }



