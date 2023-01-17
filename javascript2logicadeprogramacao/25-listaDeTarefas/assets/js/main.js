const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi () {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { // 13 = tecla enter
        if (!inputTarefa.value) return; 
        criaTarefa(inputTarefa.value);
        limpaImput();
    }
})

function limpaImput () {
    inputTarefa.value = '';
    inputTarefa.focus(); 
}

function criaBotaoApagar (li) {
    li.innerHTML += " ";
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    botaoApagar.setAttribute('class', 'apagar'); // criar classe, id entre outros
    li.appendChild(botaoApagar);
}

function criaTarefa (textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaImput();
    criaBotaoApagar(li);
    salvaTarefa();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return; // if (inputTarefa.value === "") return; impede valor vazio
    criaTarefa(inputTarefa.value);
    
});

document.addEventListener('click', function(event) {
    const el = event.target; // recebe o elemento clicado
    if (el.classList.contains('apagar')) { // se esse elemento contem a classe apagar
        el.parentElement.remove(); // removendo o pai
        salvaTarefa();
    }
});

function salvaTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas) // json de string
    localStorage.setItem('tarefas', tarefasJSON); // para salvar na memoria do navegador(deve ser string)
    // tarefas é a key
}

function adicionaTarefasSalvas() {
    if(!localStorage.getItem('tarefas')) return;
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // converter novamente para objeto javascript
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();