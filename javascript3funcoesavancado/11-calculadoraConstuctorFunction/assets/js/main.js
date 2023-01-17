function CriaCalculadora() {
    this.display = document.querySelector('.display');
    this.numeros = document.querySelector('.btn-num');

    this.iniciar = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        })
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta)
            if(!conta) {
                if (conta === 0) {
                    this.display.value = String(conta);
                    return;
                }
                alert('conta invalida');
                this.clearDisplay();
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert ('conta inválida');
            this.display.value = ''
            return;
        }
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => { // arrow function trava o this ,no caso vai travar como sendo calculadora
            const el = e.target; // aqui o this ja é o document, pois quem chama o método vai ser o this(se declarada como function)
            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
               
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
            this.display.focus();
        }); 
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };

}
const calculadora = new CriaCalculadora();
calculadora.iniciar();