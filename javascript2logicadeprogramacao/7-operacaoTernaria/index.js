// ?: reduzir codigo
/*const pontuacaoUsuario = 999;
if (pontuacaoUsuario >= 1000) {
    console.log('usuario VIP')
}else {
    console.log('usuario normal')
}*/
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario VIP' : 'usuario normal';
console.log(nivelUsuario) // usuario normal

let corUsuario = null;
let corPadrao = corUsuario || 'preta';
console.log(nivelUsuario , corPadrao); //preta

corUsuario = 'pink';
corPadrao = corUsuario || 'preta';
console.log(nivelUsuario , corPadrao); // pink