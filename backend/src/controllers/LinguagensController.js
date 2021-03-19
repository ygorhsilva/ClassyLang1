const Linguagens = require('../models/Linguagens');

module.exports = {
    async index(req, res) {
        const linguagens = await Linguagens.findAll();
    
        return res.json(linguagens);
    },
    async find(req,res){
        const nome = req.query.nome;
        const linguagens = await Linguagens.findOne({where: { nome: nome }});
        if (!nome){
            return res.status(400).json({error:'Linguagem não encontrada'})
        }
        return res.json(linguagens);
    },
    async store(req,res){
        const {nome,paradigmas,descricao} = req.body;
        const linguagens = await Linguagens.create({nome,paradigmas,descricao});
        return res.json(linguagens);
    }
    
}; 
