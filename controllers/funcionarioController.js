const express = require('express');
const Funcionarios = require('../modules/funcionarios');
const Usuarios = require('../modules/usuarios');
const router = express.Router();

var loginf = false;
var user;

router.get('/loginFun', (req, res) => {
    if(loginf == true){
        loginf = false;
    }
    res.render('funcionarios/loginF');
});

router.get('/funIndex', (req, res) => {
    if(loginf == true){
        res.render('funcionarios/index', {
            usuarioFun: user
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
            user = usuario;
            res.redirect('/funIndex');
        }else{
            console.log('Senha Invalida.');
            res.redirect('/loginFun');
        }
    });
});

module.exports = router;