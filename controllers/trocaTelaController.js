const express = require('express');
const Cliente = require('../modules/clientes');
const Evento = require('../modules/eventos');
const Funcionarios = require('../modules/funcionarios');
const Usuario = require('../modules/usuarios');
const router = express.Router();
const fc = require('./funcionarioController');

var usuar = fc.pass();


module.exports = router;