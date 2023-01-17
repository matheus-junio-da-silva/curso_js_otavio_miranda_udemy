const objA = {
    chaveA: 'a',
    saudacao() {
        return 'ola'
    }
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);
console.dir(objB.chaveA); // a

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objC, objB);
console.dir(objC.chaveA); // a

console.log(objC.saudacao());


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('caneca', 100);
console.log(p1); // Produto { nome: 'caneca', preco: 100 }

p1.desconto(10);
console.log(p1); //Produto { nome: 'caneca', preco: 90 }

const p2 = {
    nome: 'xicara',
    preco: 20
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2); // Produto { nome: 'xicara', preco: 22 }

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 30
    }
})

p3.aumento(10);
console.log(p3);

