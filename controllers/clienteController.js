const express = require('express');
const Cliente = require('../modules/clientes');
const router = express.Router();

router.get('/cadastro', (req, res) => {
    res.render('clientes/cadastro');
});

module.exports = router;