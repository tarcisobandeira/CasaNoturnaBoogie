const express = require('express');
const Cliente = require('../modules/clientes');
const Evento = require('../modules/eventos');
const Funcionarios = require('../modules/funcionarios');
const Usuario = require('../modules/usuarios');
const router = express.Router();
const fc = require('./funcionarioController');

var user = fc.pass();

//cliente
router.get('/clientes', (req, res) => {

    console.log(user);

    Cliente.findAll({
        order: [
            ['nome', 'ASC']
        ]
    }).then(clientes => {
        res.render('clientes/clienteF', {
            clientes: clientes,
            usuarioFun: user
        });
    });
});

//evento
router.get('/eventos', (req, res) => {
    Evento.findAll({
        order: [
            ['descricao', 'ASC']
        ]
    }).then(eventos => {
        res.render('eventos/eventoF', {
            eventos: eventos,
            usuarioFun: user
        });
    });
});

//funcionario
router.get('/funcionarios', (req, res) => {
    Funcionarios.findAll({
        order: [
            ['nome', 'ASC']
        ]
    }).then(funcionarios => {
        res.render('funcionarios/funcionarioF', {
            funcionarios: funcionarios,
            usuarioFun: user
        });
    });
});

//usuarios
router.get('/usuarios', (req, res) => {
    Usuario.findAll({
        include: [{
            model: Funcionarios,
            require: true
        }],
        order: [
            ['nome', 'ASC']
        ]
    }).then(usuarios => {
        res.render('usuarios/usuarioF', {
            usuarios: usuarios,
            usuarioFun: user
        });
    });
});

module.exports = router;