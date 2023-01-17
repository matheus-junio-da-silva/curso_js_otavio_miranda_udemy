let varA = 'a';//b
let varB = 'b'; //c
let varC = 'c'; //a

/*let deposito = varA
varA = varB
varB = varC
varC = deposito*/
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC)