class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    verificarSequencia() {
         return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // pega o primeiro digito repete ele
    }

    static geraDigitos(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1
        for(let stringNumerica of cpfSemDigitos) {
            total += Number(stringNumerica) * reverso;
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito >= 9 ? '0' : String(digito);
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigitos(cpfSemDigitos);
        const digito2 = ValidaCpf.geraDigitos(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
        
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.verificarSequencia()) return false;
        this.geraNovoCpf()
        
        return this.novoCpf === this.cpfLimpo;
    }
}
// '070.987.720-03'
const validaCpf = new ValidaCpf('070.987.720-03');
if(validaCpf.valida()) {
    console.log('cpf válido')
}else{
    console.log('cpf iválido')
}