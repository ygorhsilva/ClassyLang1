const LinguagensAdd = require('../models/LinguagensAdd');

module.exports = {
    async index(req, res) {
        const linguagensAdd = await LinguagensAdd.findAll();
        return res.json(linguagensAdd);
    },
    async store(req,res){
        const {nome,paradigmas,descricao} = req.body;
        const linguagensAdd = await LinguagensAdd.create({nome,paradigmas,descricao});
        return res.json(linguagensAdd);
    }
}