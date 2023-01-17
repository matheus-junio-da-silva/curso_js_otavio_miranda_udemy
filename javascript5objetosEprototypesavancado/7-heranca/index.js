function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) { // especificacao da func Produto
    Produto.call(this, nome, preco); // reutilizacao de codigo, Camiseta herda tudo que Produto tem
    this.cor = cor;
}
// Camiseta.prototype = Produto.prototype // dessa maneira o constructor vai ser a func Produto
Object.setPrototypeOf(Camiseta.prototype, Produto.prototype) // vai setar o prototype e o constructor vai ser a func Camiseta

const camiseta = new Camiseta('regata', 100, 'amarelo');
const produto = new Produto('calça', 40);
camiseta.aumento(10);
console.dir(camiseta);
console.dir(produto);

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco );
    this.material = material;
}
Object.setPrototypeOf(Caneca.prototype, Produto.prototype);

const caneca = new Caneca('advengers', 30, 'porcelana');
caneca.desconto(5);
console.log(caneca);
