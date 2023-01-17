class ConstroleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // metodo de instancia
    // criando um objeto com uma classe com a palavra new, voce esta instanciando uma classe
    aumentarVolume() {
        this.volume++;
    }

    diminuirVolume() {
        this.volume--;
    }

    // metodo estatico, tipo uma funcao dentro de uma classe a fim de organizacao
    // nao tem acesso ao constructor / dados da instancia
    static soma(x, y) {
        return x + y;
    }
}
const controle1 = new ConstroleRemoto('lg');
controle1.aumentarVolume();
console.log(controle1);

// controle1.soma(1, 3); nao da pois é estatico
console.log(ConstroleRemoto.soma(1, 3)); // tem que chamar a classe

class A {
    static falar() {
      console.log('OIE');
    }
  }
   
class B extends A {}
B.falar(); // OIE