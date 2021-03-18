const {Model, DataTypes} = require('sequelize');

class Paradigmas extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            linguagens: DataTypes.STRING,
            descricao: DataTypes.TEXT,
            chaves: DataTypes.TEXT
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsToMany(models.Linguagens,{ foreignKey:'paradigmas_id', through: 'linguagens_paradigmas', as: 'paradigmas'})
    }
}

module.exports = Paradigmas;