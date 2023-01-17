// ver se string
// converter para number
//  addEventlistener submit mostrar div
const resultado = document.querySelector('#resultado');
const peso = document.querySelector('#input-1');
const altura = document.querySelector('#input-2');
const form = document.querySelector('.formata');
console.log(resultado);

function verificar (peso, altura) { 
    if (peso == "" || altura== "") {
        return false
    }
    return !isNaN(peso) && !isNaN(altura); //se numero = true
}

function func (evento) {
    evento.preventDefault(); // nao atualizar pagina quando submit / capturar evento
    const verificado = verificar(peso.value, altura.value);
    if (verificado) {
        const valorPeso = parseFloat(peso.value);
        const valorAltura = parseFloat(altura.value);
        const imc = (valorPeso) / (valorAltura ** 2);
        resultado.innerHTML = (`<p class="formatado-certo">Seu imc é: ${imc.toFixed(2)}</p>`);
        peso.value = "" // limpar campo 
        altura.value = ""
    }else {
        resultado.innerHTML = ('<p class="formatado">Peso ou Altura inválidos </p>');
        peso.value = ""
        altura.value = ""
    }
    


}

form.addEventListener('submit', func); // sem parenteses func para executar quando submit
