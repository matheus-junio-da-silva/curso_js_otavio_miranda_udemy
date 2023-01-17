const nome =  'matheus junio';
console.log(nome[5]);
//                0         1       2
const alunos = ['Luiz', 'maria', 'joao'];
console.log(alunos[0]);
alunos[0] = 'eduardo'; //altera
console.log(alunos);
alunos[3] = 'luiza';
alunos[alunos.length] = 'fábio';//adiciona no fim
console.log(alunos);
alunos.push('matheus') //adiciona no fim
alunos.unshift('colina')
alunos.unshift('greg') //adiciona no começo
console.log(alunos);
alunos.pop();
console.log(alunos);
const removido = alunos.pop();// tira o ultimo
console.log(removido);
console.log(alunos);
delete alunos[0];
console.log(alunos);
console.log(alunos[50]);// undefined
alunos.push('eduardo2');
console.log(alunos);
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));
console.log(typeof alunos);// object
console.log(alunos instanceof Array) //true



