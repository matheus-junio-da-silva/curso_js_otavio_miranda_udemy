const data = new Date(); //new construtura
console.log(data.toString());
// Date(0)01/01/1970
const tresHoras = 1000 * 60 * 60 * 3;
const umDia = 60 * 60 * 24 * 1000;
const dataa = new Date(0 + tresHoras + umDia);
console.log(dataa.toString());

const datas = new Date(2019, 3, 20, 15, 14, 27, 1000); // janeiro = 0 fevereiro = 1
console.log(datas.toString(), 'ola');

const datar = new Date('2019-04-20 20:20:59');
console.log(datar.toString());
console.log('dia', datar.getDate());
console.log('mes', datar.getMonth()); // comeca no 0
console.log('ano', datar.getFullYear());
console.log('hora', datar.getHours());
console.log('min', datar.getMinutes());
console.log('seg', datar.getSeconds());
console.log('milis', datar.getMilliseconds());
console.log('dia da semana', datar.getDay()); // 0 - domingo

function zeroAEsquerda (num) {
    return num >= 10 ? num :`0${num}`;
}

function formataData (data) {
    
}

const dataf = new Date();
const dataBrasil = formataData(dataf);
console.log(dataBrasil);