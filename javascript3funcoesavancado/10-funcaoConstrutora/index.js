// funcao construtora -> objetos
// construtora -> pessoa (new)
function Pessoa(nome, sobrenome) {
    // atributos ou metodos privadas
    const ID = 123456;
    // atributos ou metodos públicos (this.)
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}
const p1 = new Pessoa('matheus', 'junio'); // o new é para o this apontar para p1
const p2 = new Pessoa('joao', 'augusto'); // o new é para o this apontar para p2
p1.metodo();
