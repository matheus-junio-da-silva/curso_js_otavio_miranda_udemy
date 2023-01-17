for (let i = 0; i <= 5; i++) {
    console.log(`linha ${i}`);
}
for (let i = -4; i <= 5; i += 2) {
    console.log(`linha ${i}`);
}
for (let i = 0; i <= 10; i ++) {
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(i, par)
}

const frutas = ['maca','pera','uva'];
for (let i = 0; i < frutas.length; i ++) { //frutas.length = 3
    console.log(`indice ${i}` ,frutas[i]);
}