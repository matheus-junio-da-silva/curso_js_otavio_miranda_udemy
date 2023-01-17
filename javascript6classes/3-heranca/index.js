class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log('dispositivo ja ligado');
            return;
        }
        this.ligado = true;
        console.log('dispositivo foi ligado nesse exato momento');
    }

    desligar() {
        if(!this.ligado) {
            console.log('dispositivo ja desligado');
            return;
        }
        this.ligado = false;
        console.log('dispositivo foi desligado nesse exato momento');
    }
}
const d1 = new DispositivoEletronico('celular');
console.log(d1);
d1.ligar();

/////////////////////////////////////////////////////////////////////////

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const celular = new Smartphone('samsumg', 'preto', 'j7Prime');
console.log(celular);

// nao fazer uma classe herdar mais que 3 classes para que o codigp fique legivel

class Tablet extends DispositivoEletronico {
    constructor (nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('voce alterou o metodo ligar')
    }
}

const tablet = new Tablet('ipad', true);
tablet.ligar();