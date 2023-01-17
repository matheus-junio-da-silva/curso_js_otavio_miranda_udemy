// primitivos = imutáveis - copiados
let nome = 'matheus';
nome = 'noemia';
console.log(nome[0]);
nome[0] = 'p' // imutavel
console.log(nome) // noemia
let a = 'a';
let b = a; //copia
console.log(a, b);
a = 'outra coisa';
console.log(a,b);

// mutaveis - array, object, function - referencia
let m = [1,2,3];
let n = m;
console.log(m,n);//[ 1, 2, 3 ] [ 1, 2, 3 ]

m.push(4);
console.log(m,n);//[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

n.pop();
console.log(m,n);//[ 1, 2, 3 ] [ 1, 2, 3 ]

n = [...m];// copiar e nao referencia
n.push(4);
console.log(m,n);//[ 1, 2, 3 ] [ 1, 2, 3, 4 ]

const e = {
    nome: 'luiz',
    sobrenome: 'otavio'
};
const r = {...e};
r.nome = 'matheus';
console.log(e, r); //{ nome: 'luiz', sobrenome: 'otavio' } { nome: 'matheus', sobrenome: 'otavio' }




