// array é valor por referencia
const nomes = ['joao', 'maria', 'matheus'];
console.log(nomes);

let novo = nomes;
novo.pop(); // nomes tambem e alterado

console.log(nomes);
console.log(novo);

const names = ['ricardo', 'joana', 'joaquim'];
console.log(names);

let neww = [...names];
neww.pop(); // utilizando o rest operator nao e mais um valor por referencia

console.log(names);
console.log(neww);

// .length nao é um metodo e sim um atributo

const nam = 'matheus junio menendez';
const ooo = nam.split(' '); // separar por espaco converter em string
console.log(ooo);
const arr = ooo.join(' ')
console.log(arr);


