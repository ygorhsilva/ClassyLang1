const {Model, DataTypes} = require('sequelize');
const { tableName } = require('./Linguagens');

class LinguagensAdd extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            paradigmas: DataTypes.STRING,
            descricao: DataTypes.TEXT,
        },{
            sequelize,
            tableName: 'linguagens_add'
        })
    }
}

module.exports = LinguagensAdd;