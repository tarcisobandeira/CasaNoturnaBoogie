const Sequelize = require('sequelize');
const connection = require('../database/database');

const Cliente = connection.define('clientes', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rg: {
        type: Sequelize.STRING(12),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(14),
        allowNull: false
    }
});

//Cliente.sync({force: true});

module.exports = Cliente;