/* minha resolucao teste!!!

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

const timer = document.querySelector('.relogio');
let time = new Date();
time.setHours(0, 0, 0, 0);
function iniciarTimer() {
    const atualizarTexto = function() {
      time.setTime(time.getTime() + 1000);            //Incrementa o cronômetro em  1s.
      timer.innerHTML = time.toLocaleTimeString('pt-BR', {
        hour: "2-digit",                              //Exibirá horas.
        minute: "2-digit",                            //Exibirá minutos.
        second: "2-digit"                             //Exibirá segundos.
      });
    };
    let set = setInterval(atualizarTexto, 1000);
    pausar.addEventListener('click', function() {
        console.log(timer.innerText)
        console.log(set);
        setTimeout(function() {
            clearInterval(set);
        }, 0000);
    })
    return set;
  }
  


iniciar.addEventListener('click', iniciarTimer)
zerar.addEventListener('click', function(event) {
    time.setHours(0, 0, 0, 0);
})*/

// resolucao do professor abaixo

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // *1000 pois é milésimo
    return data.toLocaleTimeString('pt-BR', { // pega somente a hora
        hour12: false,
        timeZone:'UTC' // para ficar 00:00:00 sem ficaria 21:00:00
    })
}
console.log(criaHoraDosSegundos(5))
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio () {
    timer = setInterval (function() {
        segundos ++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000) // executa a funcao a cada 1 segundo
}

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer); // para nao ter duas funcoes rodando ao mesmo tempo
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer); // pausa o set interval
    relogio.classList.add('pausado');
})

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
})

