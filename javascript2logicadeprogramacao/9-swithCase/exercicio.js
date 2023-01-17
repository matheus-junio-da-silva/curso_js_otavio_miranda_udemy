const secao = document.querySelector('#secao');
const data = new Date();
const datar =  data.toString();// trasformar para string
console.log(data.getDate());

function verificarDia (diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
    case 0 :
        diaSemanaTexto = 'domingo';
        return diaSemanaTexto;
    case 1 :
        diaSemanaTexto = 'segunda';
        return diaSemanaTexto;
    case 2 :
        diaSemanaTexto = 'terca';
        return diaSemanaTexto;
    case 3 :
        diaSemanaTexto = 'quarta';
        return diaSemanaTexto;
    case 4 :
        diaSemanaTexto = 'quinta';
        return diaSemanaTexto;
    case 5 :
        diaSemanaTexto = 'sexta';
        return diaSemanaTexto;
    case 6 :
        diaSemanaTexto = 'sabado';
        return diaSemanaTexto;
    }
}

function getData (data) {
    const dia = data.getDate();
    const diaDaSemana = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const diaSeman = verificarDia(diaDaSemana)

    return `<p>${diaSeman}, ${dia} do ${mes + 1} de ${ano} ${hora}:${min}</p>`;
}
const dataAtual = getData(data)
secao.innerHTML = dataAtual


// clean code

const section = document.querySelector('#secao');
const dataa = new Date();
section.innerHTML += dataa.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});