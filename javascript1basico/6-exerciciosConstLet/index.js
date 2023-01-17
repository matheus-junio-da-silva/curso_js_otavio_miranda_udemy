const nome = 'matheus'
const sobrenome = 'junio'
const idade = 21
const peso = 73
const altura = 1.80
let imc = Math.ceil(peso / (altura * altura))
console.log(imc)
let anoDeNascimento = 2022 - idade
console.log(anoDeNascimento)
let mensagem = nome + ' '+ sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg, tem a altura de ' + altura + ' e seu imc é de ' + imc +' '+ nome + ' nasceu em ' + anoDeNascimento
console.log(mensagem)
console.log(nome, 'tem')
let msn = `oi eu sou ${nome} e tenho ${idade} anos, prazer em te conhecer`
console.log(msn)
