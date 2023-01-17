console.log('matheus junio' && 0 && 'maria');
/*
falsy
false
0
'' "" ``
null / undefined
NaN
*/
console.log('matheus' && NaN && 'luiz');

function falaOi () {
    return 'oi';
}

let vaiExecutar = false;

console.log(falaOi() && vaiExecutar); // false
vaiExecutar = 'joaozinho'
console.log(falaOi() && vaiExecutar); //joaozinho

console.log(0 || null || 'matheus' || 'oi')// matheus

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); //preto

const a = 0;
const b = 'false';
const c = false;

console.log(a || b || c); // false string