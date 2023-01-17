const data = new Date();
const diaDaSemana = data.getDay();
console.log(diaDaSemana)
let diaSemanaTexto;

switch (diaDaSemana) {
    case 0 :
        diaSemanaTexto = 'domingo';
        break;
    case 1 :
        diaSemanaTexto = 'segunda';
        break;
    case 2 :
        diaSemanaTexto = 'terca';
        break;
    case 3 :
        diaSemanaTexto = 'quarta';
        break;
    case 4 :
        diaSemanaTexto = 'quinta';
        break;
    case 5 :
        diaSemanaTexto = 'sexta';
        break;
    case 6 :
        diaSemanaTexto = 'sebado';
        break;
    default:
        diaSemanaTexto = '';
        break;
}
console.log(diaSemanaTexto);