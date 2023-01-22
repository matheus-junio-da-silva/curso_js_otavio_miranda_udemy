const express = require("express"); // nao precisa de caminho, pois esta dentro do node modules
const app = express();

// post = criar
// get = ler
// put = atualizar

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
); // trata para receber o que foi postado

// envia para a home 
app.get('/', (req, res) => {
    res.send(` 
    <form action="/" method="POST">
    nome: <input type="text" name="nome">
    <button>enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.query); // vem depois do ponto de interrogacao(no link)
    console.log(req.params);
    res.send(req.query);
});

app.post('/', (req, res) => {
    console.log(req.body); // tem que tratar para receber um objeto do que foi postado
    res.send(`o que voce me enviou foi: ${req.body.nome}`);
});


app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});