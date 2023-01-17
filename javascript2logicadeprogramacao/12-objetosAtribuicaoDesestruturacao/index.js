const pessoa = { 
    nome: 'matheus',
    //sobrenome: 'junio',
    idade: 20,
    endereco: {
        rua: 'av Brasil',
        numero: 320
    }
};
let nomei = pessoa.nome;
console.log(nomei);

const { nome, sobrenome = 'valor padrao', idade } = pessoa;
console.log(nome, sobrenome,idade);

const {nome: n = '', idade: i} = pessoa;
console.log(n, i);// mudando nome

const {endereco: {rua: r, numero}, endereco } = pessoa;
console.log(r,numero,endereco )

const { nome: nm, ...resto } = pessoa;
console.log(nm, resto)