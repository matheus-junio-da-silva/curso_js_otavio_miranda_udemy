const express = require("express"); // nao precisa de caminho, pois esta dentro do node modules
const app = express();
const routes = require('./routes');
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

app.use(routes);

app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});