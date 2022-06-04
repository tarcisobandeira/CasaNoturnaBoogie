const express = require('express');
const Cliente = require('../modules/clientes');
const Evento = require('../modules/eventos');
const Funcionarios = require('../modules/funcionarios');
const Produto = require('../modules/produtos');
const Usuario = require('../modules/usuarios');
const Usuarios = require('../modules/usuarios');
const router = express.Router();

var loginf = false;
var usuar;

router.get('/loginFun', (req, res) => {
    if(loginf == true){
        loginf = false;
    }
    res.render('funcionarios/loginF');
});

router.get('/funIndex', (req, res) => {
    if(loginf == true){
            res.render('funcionarios/index', {
            usuarioFun: usuar
        });
    }else{
        res.redirect('/loginFun');
    }
});

router.post('/loginFun/entrar', (req, res) => {
    senha = req.body.senha;

    Usuarios.findOne({
        where: {
            nome: req.body.login
        },
        include: [{
            model: Funcionarios,
            require: true
        }]
    }).then(usuario => {
        if(usuario == undefined){
            console.log('Usuário não existe.');
            res.redirect('/loginFun');
        }else if(usuario.senha == senha){
            console.log('Bem vindo ' + usuario.funcionario.nome);
            loginf = true;
            usuar = usuario;
            res.redirect('/funIndex');
        }else{
            console.log('Senha Invalida.');
            res.redirect('/loginFun');
        }
    });
});

//cliente
router.get('/clientes', (req, res) => {
    Cliente.findAll({
        order: [
            ['nome', 'ASC']
        ]
    }).then(clientes => {
        res.render('clientes/clienteF', {
            clientes: clientes,
            usuarioFun: usuar
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
            usuarioFun: usuar
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
            usuarioFun: usuar
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
            usuarioFun: usuar
        });
    });
});

//Produtos
router.get('/produtos', (req, res) => {
    Produto.findAll({
        order: [
            ['descricao', 'ASC']
        ]
    }).then(produtos => {
        res.render('produtos/produtoF', {
            produtos: produtos,
            usuarioFun: usuar
        });
    });
});

//userLogado
router.get('/usuarioLogado', (req, res) => {
    Usuario.findOne({
        where: {
            nome: usuar.funcionario.nome
        },
        include: [{
            model: Funcionarios,
            require: true
        }]
    }).then(usuarios => {
        res.render('usuarios/userLogin', {
            usuarios: usuarios,
            usuarioFun: usuarios
        })
    });
});

module.exports = router;