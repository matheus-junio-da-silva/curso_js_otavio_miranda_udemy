const pessoas = [
    { id: 3, nome: 'matheus'},
    { id: 2, nome: 'luis'},
    { id: 1, nome: 'joana'},
]
// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa};
// }
// console.log(novasPessoas);

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

//console.log(novasPessoas.get(2));
console.log(novasPessoas);

for (const pessoa of novasPessoas.values()) {
    console.log(pessoa);
}