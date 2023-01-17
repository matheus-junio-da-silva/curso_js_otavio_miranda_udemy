const mod1 = require('./mod1');
//console.log(mod1);

// console.log(mod1.falaNome())

//const {Pessoa} = require('./mod1');

const p1 = new mod1.Pessoa('matheus');
console.log(p1);

// modulos do node_modules nao precisa do caminho ex
const path = require('path');
const axios = require('axios');

console.log(mod1);