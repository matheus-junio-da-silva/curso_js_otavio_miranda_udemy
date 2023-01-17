const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    
    if (numero === 2) {
        continue; // pula para proxima iteraçao
    }

    if (numero === 7) {
        console.log(' 7 encontrado, final iteracao');
        break; // para o laço
    }

    console.log(numero)
}