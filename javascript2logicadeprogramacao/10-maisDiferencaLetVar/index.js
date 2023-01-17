const verdadeira = true;
let nome = 'luiz';
var nome2 = 'luiz';
if (verdadeira) {
    let nome= 'otavio';//let escopo de bloco {...bloco} - tudo que esta entre chaves
    console.log(nome, nome2);//otavio luiz

    if (verdadeira) {
        let nome = 'matheus';
        console.log(nome); // matheus
    }
}

var nome2 = 'matheus';
console.log(nome2);
if (verdadeira) {
    var nome2 = 'luiz';
    console.log(nome2);
}
console.log(nome2);// se fosse let seria matheus


//var escopo de funcao
var sobrenome = 'miranda';
function falaOi () {
    var nome = 'otavio';
    console.log(sobrenome);
    console.log(nome);
}

falaOi(); // miranda otavio


