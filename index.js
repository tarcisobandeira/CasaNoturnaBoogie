const express = require('express');
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

app.listen(8080, () => {
    console.log('Servidor ON.');
})