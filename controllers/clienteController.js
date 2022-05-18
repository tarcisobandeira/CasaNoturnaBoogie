const express = require('express');
const Cliente = require('../modules/clientes');
const router = express.Router();

router.get('/cadastro', (req, res) => {
    res.render('clientes/cadastro');
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;