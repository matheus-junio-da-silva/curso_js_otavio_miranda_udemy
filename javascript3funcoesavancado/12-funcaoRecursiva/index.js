// funcao recursiva é uma funcao que chama ela mesma
function recursiva(max) {
    if(max > 10) return;
    console.log(max);
    max ++;
    recursiva(max)
}
recursiva(1);