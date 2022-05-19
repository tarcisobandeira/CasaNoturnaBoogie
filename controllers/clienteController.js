const express = require('express');
const runtimeScriptErrors = require('jsdom/lib/jsdom/living/helpers/runtime-script-errors');
const Cliente = require('../modules/clientes');
const router = express.Router();

var login = false;
var cpflogin;
var cli;

router.get('/cadastro', (req, res) => {
    res.render('clientes/cadastro', {
        cpf: cpflogin
    });
});

router.get('/login', (req, res) => {
    if(login == true){
        login = false;
    }
    res.render('login');
});

router.get('/index', (req, res) => {
    if(login == true){
        res.render('clientes/index', {
            clientel: cli
        });
    }else{
        res.render('login');
    }
});

router.post('/cliente/salvar', (req, res) => {
    var nome = req.body.nome;
    var rg = req.body.rg;
    var cpf = req.body.cpf;

    Cliente.findOne({
        where: {
            cpf : cpf
        }
    }).then(cliente => {
        if(cliente == undefined){
            Cliente.create({
                nome: nome,
                rg: rg,
                cpf: cpf
            }).then(() => {
                res.redirect('/login');
            })
        }else{
            res.redirect('/login');
        }
    })
});

router.post('/login/entrar', (req, res) => {
    var cpf = req.body.cpf;

    Cliente.findOne({
        where: {
            cpf: cpf
        }
    }).then(cliente => {
        if(cliente == undefined){
            cpflogin = cpf;
            res.redirect('/cadastro');
        }else{
            cli = cliente;
            login = true;
            res.redirect('/index');
        }
    });
});

module.exports = router;