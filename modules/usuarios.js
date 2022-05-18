const Sequelize = require('sequelize');
const connection = require('../database/database');
const Funcionario = require('./funcionarios');

const Usuario = connection.define('usuarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Usuario.belongsTo(Funcionario);

//Usuario.sync({force: true});

module.exports = Usuario;