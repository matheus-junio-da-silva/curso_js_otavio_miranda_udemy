const express = require("express"); // nao precisa de caminho, pois esta dentro do node modules
const app = express();
const routes = require('./routes');
const path = require('path');
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

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use(routes);

app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});