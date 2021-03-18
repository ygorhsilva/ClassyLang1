const {Model, DataTypes} = require('sequelize');

class Linguagens extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            paradigmas: DataTypes.STRING,
            descricao: DataTypes.TEXT,
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsToMany(models.Paradigmas,{ foreignKey:'linguagens_id', through: 'linguagens_paradigmas', as: 'linguagens'})
    }
}

module.exports = Linguagens;