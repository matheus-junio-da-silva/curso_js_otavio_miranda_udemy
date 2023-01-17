const express = require("express"); // nao precisa de caminho, pois esta dentro do node modules
const app = express();

// post = criar
// get = ler
// put = atualizar

// envia para a home 
app.get('/', (req, res) => {
    res.send(` 
    <form action="/" method="POST">
    nome: <input type="text" name="nome">
    <button>enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('recebi o formulario');
});

// envia para contato
app.get('/contato', (req, res) => {
    res.send('obrigado por entrar em contato conosco');
});

app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});