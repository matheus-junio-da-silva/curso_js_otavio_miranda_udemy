const express = require("express"); // nao precisa de caminho, pois esta dentro do node modules
const app = express();
const routes = require('./routes');
const path = require('path');
// associacao via desestruturacao
const {middlewareGlobal} = require('./src/middlewares/middleware')
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

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// nossos propios middlewares
app.use(middlewareGlobal);

app.use(routes);

app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});