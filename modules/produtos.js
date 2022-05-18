const Sequelize = require('sequelize');
const connection = require('../database/database');

const Produto = connection.define('produtos', {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valorCusto: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    margemLucro: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    valorVenda: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    quantEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dataFabricacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dataValidade: {
        type: Sequelize.DATE,
        allowNull: false
    },
    codigoFabricante: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Produto.sync({force: true});

module.exports = Produto;