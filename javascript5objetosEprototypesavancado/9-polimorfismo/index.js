function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    p1.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | saldo:${this.saldo.toFixed(2)}`)
};
const p1 = new Conta(1234,'poupanca', 20000);
p1.depositar(2000);
p1.sacar(1000);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor) {
        console.log(`saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 100, 100);
cc.verSaldo();
cc.sacar(200);


function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;
ContaPoupanca.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const cp = new ContaPoupanca(11, 22, 100, 100);
cp.verSaldo();
cp.sacar(100);