// defineProperty é para 1 chave
// defineProperties é para varias chaves
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        //value: estoque, // valor
        value: () => {
            return estoque;
        },
        writable: false, // se pode alterar valor
        configurable: false //  se é permitido reconfigurar, apagar
    })
    
    /*  se configurable true posso redefinir
        Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: false //  se é permitido reconfigurar, apagar
    })*/

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true
        }
    })
}

const p1 = new Produto('camiseta', 20, 3);
/* se writable true posso alterar valores
p1.estoque = 1000;
*/

// se configurable true posso apagar 
//delete p1.estoque;
console.log(p1);
console.log(p1.estoque()); // 3

for (let chave in p1) {
    console.log(chave);
}