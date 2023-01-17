const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 55
    } 

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
        console.log('setter');
    }

    get velocidade() {
        console.log('getter');
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    desacelerar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}
const c1 = new Carro('Novo Fusca');
c1.velocidade = 25;