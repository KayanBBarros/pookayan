let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");

const Pessoa = db.define("Pessoa",
{
    id_pe: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        PrimaryKey: true
    },
    nome :{
        type: DataTypes.STRING,
        allowNull : false
    },
    sobrenome : {
        Type: DataTypes.STRING,
        allowNull: false
    },
    endereco : DataTypes.STRING,
    telefone : DataTypes.INTEGER,

    }
);

module.exports = Pessoa;