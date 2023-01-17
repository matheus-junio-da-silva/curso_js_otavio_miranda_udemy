//                -4        -3       -2        -1
//                0        1         2         3
const nomes = ['maria', 'joao', 'matheus', 'joaquim'];
// nomes.splice(indice atual, delete, elem1, elem2) 
//const removidos = nomes.splice(2, 1); //[ 'maria', 'joao', 'joaquim' ] [ 'matheus' ]
const removidos = nomes.splice(2, 1, 'colina'); //[ 'maria', 'joao', 'colina', 'joaquim' ] [ 'matheus' ]
console.log(nomes, removidos);

// push
nomes.splice(nomes.length, 0, 'ribamar', 'locoAbreu');
console.log(nomes); //[ 'maria', 'joao', 'colina', 'joaquim', 'ribamar', 'locoAbreu' ]