const Sequelize = require('sequelize');
const connection = require('../database/database');

const Funcionario = connection.define('funcionarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
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
    },
    nivelUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING(9),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(17),
        allowNull: false
    } 
});

//Funcionario.sync({force: true});

module.exports = Funcionario;