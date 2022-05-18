const Sequelize = require('sequelize');
const connection = require('../database/database');
const Funcionario = require('./funcionarios');

const Evento = connection.define('eventos', {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataEvento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    tipo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantPessoas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantPessoasConfirm: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valorEntrada: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

Evento.belongsTo(Funcionario, {
    foreignKey: {
       name: 'responsavel'
    }
});

//Evento.sync({force: true});

module.exports = Evento;