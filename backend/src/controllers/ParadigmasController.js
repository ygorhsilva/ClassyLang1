const Paradigmas = require('../models/Paradigmas');


module.exports = {
    async index(req,res){
        const paradigmas = await Paradigmas.findAll();
        return res.json(paradigmas);
    },
    async store(req,res){
        const {nome,linguagens,descricao,chaves} = req.body;
        const paradigmas = await Paradigmas.create({nome,linguagens,descricao,chaves});
        return res.json(paradigmas);
    },
    async findOne(req,res){
        const nome = req.params.nome;
        console.log(nome);
        const paradigma = await Paradigmas.findOne({where: { nome: nome }});
        return res.json(paradigma);
    }, 
};