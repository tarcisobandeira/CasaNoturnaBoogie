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
const Usuario = require('./modules/usuarios');
const Produto = require('./modules/produtos');

const clienteController = require('./controllers/clienteController');

app.get('/', (req, res) => {
    res.render('login');
});

app.use('/', clienteController);

app.listen(8080, () => {
    console.log('Servidor ON.');
})