// const produto = { nome: 'caneca', preco: 20};
// const outraCoisa = produto;
// outraCoisa.nome = 'jarra';
// console.log(produto); //{ nome: 'jarra', preco: 20 }

const produto = { nome: 'caneca', preco: 20};
const outraCoisa = {
    ...produto,
    material: 'porcelana'
};
console.log(outraCoisa);

const caneca = Object.assign({}, produto, {material: 'porcelana'} ) //mesmo spread operator ...
console.log(Object.keys(outraCoisa));

const propiedade = Object.getOwnPropertyDescriptor(produto, 'nome');
console.log(propiedade);

console.log(Object.values(produto)); // [ 'caneca', 20 ]
console.log(Object.entries(produto)); // [ [ 'nome', 'caneca' ], [ 'preco', 20 ] ]

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
// nome caneca
// preco 20

