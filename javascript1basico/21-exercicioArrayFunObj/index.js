function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    /*form.onsubmit = function(evento) {
        evento.preventDefault();
        alert(1);
        console.log('foi enviado');
    };*/

    function recebeEvento (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas)

        resultado.innerHTML += `<p>${pessoas[pessoas.length-1].nome} ${pessoas[pessoas.length-1].sobrenome} ${pessoas[pessoas.length-1].peso} ${pessoas[pessoas.length-1].altura}</p>`

    }

    form.addEventListener('submit', recebeEvento);// quando submit executar funcao
}
meuEscopo();