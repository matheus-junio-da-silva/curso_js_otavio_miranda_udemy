function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('bad value');
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

// esperaAi('fase1', rand())
//     .then(valorDoResolve => {
//         console.log(valorDoResolve);
//         return esperaAi('fase2', rand());
//     })
//     .then(valorDoResolve => {
//         console.log(valorDoResolve);
//         return esperaAi('fase3', rand());
//     })
//     .then(valorDoResolve => {
//         console.log(valorDoResolve);
//         return valorDoResolve;
//     })
//     .then(valorDoResolve => {
//         console.log('terminamos na ' + valorDoResolve);
//     })
//     .catch(e => console.log(e));

/////////////////////////////////////////////////////////

async function executa() {
    try {
        const fase1 = esperaAi('fase1', 1000);
        console.log(fase1);

        setTimeout(() => {
            console.log('essa promisse estava pendente: ', fase1)
        }, 1200)

        const fase2 = await esperaAi('fase2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('fase3', rand());
        console.log(fase3);
    } catch(e) {
        console.log(e);
    }
}


executa();