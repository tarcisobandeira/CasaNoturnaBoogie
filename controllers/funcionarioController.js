const express = require('express');
const Funcionario = require('../modules/funcionarios');
const router = express.Router();

var login = false;

router.get('/loginFun', (req, res) => {
    res.render('funcionarios/loginF');
});

module.exports = router;