function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        //value: estoque,
        //writable: false, // se pode alterar valor
        configurable: true, //  se é permitido reconfigurar, apagar
        get: () => {
            return estoquePrivado; // get obtem o valor
        },
        set: (valor) => { // set é para modificar o valor, setar o valor
            if (typeof valor !== 'number') {
                throw new TypeError('mensagem');
            }
            estoquePrivado = valor;
        }
        
    })
}
const p1 = new Produto('camiseta', 20, 3);
console.log(p1);
//p1.estoque = 'o valor que eu quero';
console.log(p1.estoque);
