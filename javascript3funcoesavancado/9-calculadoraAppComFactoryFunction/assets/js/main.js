function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        iniciar() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        clearDisplay() {
            this.display.value = '';
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta)
                if(!conta) {
                    alert('conta invalida');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert ('conta inválida');
                this.display.value = ''
                return;
            }
        },

        cliqueBotoes() {
            // aqui this é a const calculadora
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
            }); //quando nao utilizada a arrow function .bind() para considerar o this como sendo a calculadora e nao o document
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.iniciar();
