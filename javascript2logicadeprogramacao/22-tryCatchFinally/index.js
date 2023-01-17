try {
    console.log(a);
    console.log('manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo');
} catch (e) {
    console.log('tratando o erro');
} finally {
    console.log('finally: eu sempre sou executado');
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instância de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleString('pt-BR', {hour12: false});
}

//console.log(retornaHora(11));

try {
    const data = new Date('01-01-1970 12:05:13');
    const hora = retornaHora(11);
} catch (e) {
    //tratar erro
}finally {
    console.log('tenha um bom dia');
}