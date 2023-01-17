class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos(); // assim quando eu instanciar essa classe esse método é executado
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    
    handleSubmit(e) {
        e.preventDefault(); // sao realizar o envio do formulario
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        if (camposValidos && senhasValidas) {
            alert('formulario Enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'campo "senha" e repetir senha devem ser iguais');
            this.criaErro(repetirSenha, 'campo "senha" e "repetir senha" devem ser iguais');
        }
        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha , 'campo "senha" precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        return valid;
    }

    camposSaoValidos() {
        let valid = true;
        this.retirarErroExistente();
        const camposDoFormulario = this.formulario.querySelectorAll('.validar');
        for (let campo of  camposDoFormulario) {
            if(!campo.value){ // se o campo vazio
                this.criaErro(campo, `Campo "${this.selecionaTextoDoIrmaoAnterior(campo)}" nao pode estar em branco`);
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo , 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e/ou números sem espacos');
            valid = false
        }
        return valid;
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        return true;
    }

    retirarErroExistente() {
        for(let elementoDoErro of this.formulario.querySelectorAll('.error-text')) {
            elementoDoErro.remove();
        }
    }

    selecionaTextoDoIrmaoAnterior(campo) {
        return campo.previousElementSibling.innerText;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div) // depois do campo inserir a div
    }

}
const valida = new ValidaFormulario();
