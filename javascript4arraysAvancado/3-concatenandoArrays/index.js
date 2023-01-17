const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'matheus'); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'matheus' ]

// ... rest -> ... spread
console.log(a3);

const a4 = [...a1, ...a2, 'luiz', ...[7, 8, 9]];
// nesse caso o nome dos tres pontinhos é spread porque se trata de arrays