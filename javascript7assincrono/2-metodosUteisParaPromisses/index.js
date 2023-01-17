function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') { 
            reject('bad value');
            return;
        };
        setTimeout(() => {
            resolve(msg + ' passei na promisse');
        }, tempo)
    });
}

const promisses = [
    //'primeiro valor',
    esperaAi('promisse 1', 3000),
    esperaAi('promisse 2', 1000),
    esperaAi('promisse 3', 2000),
    //'outro valor'
];

// Promise.all(promisses)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(e => {
//         console.log(e);
//     });

// Promise.race(promisses)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(e => {
//         console.log(e);
//     });

function baixaPagina() {
    const inCash = true;
    if(inCash) {
        return Promise.resolve('pagina em cache');
    }else {
        return esperaAi('baixei a pagina', 2000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e));

/////////////////////////////////////////////////////////

function baixaPagina2() {
    const inCash = true;
    if(inCash) {
        return Promise.reject('vai retornar um erro');
    }else {
        return esperaAi('baixei a pagina', 2000);
    }
}

baixaPagina2()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e));

