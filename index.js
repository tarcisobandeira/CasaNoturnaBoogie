const express = require('express');
const req = require('express/lib/request');
const app = express();
const connection = require('./database/database');

app.set('view engine', 'ejs');

app.use(express.static('public'));

connection.authenticate().then(() => {
    console.log('Conexão feita com sucesso.');
}).catch(erro => {
    console.log('Problemas na conexão');
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const Cliente = require('./modules/clientes');
const Funcionario = require('./modules/funcionarios');
const Evento = require('./modules/eventos');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8080, () => {
    console.log('Servidor ON.');
})