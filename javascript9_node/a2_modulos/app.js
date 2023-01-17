// const multiplicacao = require('./mod1');

// console.log(multiplicacao(2, 3));


const Cachorro = require('./mod1');
const c1 = new Cachorro('dálmata');
c1.latir();

// ./ pasta atual
// ../ pasta anterior

console.log(__filename); // caminho deste arquivo 
console.log(__dirname); // caminho deste diretorio

const path = require('path');
console.log(__dirname);
console.log(path.resolve(__dirname, '..', '..', 'arquivos'))
// o diretorio atual mas duas pastas atrás(..), e uma pasta à frente(arquivos)
