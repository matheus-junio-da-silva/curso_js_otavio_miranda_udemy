const nome = 'luiz';

function falaNome() {
    console.log(nome);
}
function usaFalaNome() {
    const nome = 'matheus';
    falaNome();
}
usaFalaNome(); // luiz