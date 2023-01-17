const nome = 'matheus';
const sobrenome = 'junio';
const falaNome = () => {
    return nome + ' ' + sobrenome;
}

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'o que eu quiser exportar';
// as tres maneiras eu consigo exportar
// a ultima é menos usual
// o this se referencia ao exports

//console.log(module.exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

module.exports.Pessoa = Pessoa;

