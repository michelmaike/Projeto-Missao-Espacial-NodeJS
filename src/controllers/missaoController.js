const Missao = require('../models/missao');
const Usuario = require('../models/user');
const { validationResult } = require('express-validator');

module.exports ={
    obterMissoes: async (req, res) => {
        let missoes = await Missao.find().populate('criadoPor', 'nome email');
        res.json({ missoes });
    },

    adicionarMissao: async (req, res) =>{
        const erros = validationResult(req);
        if(!erros.isEmpty()) {
            return res.json({ erro: erros.mapped() });
        }

        const {nome, descricao, custo, categoria, vagasTripulacao, organizacao, estaAtiva, criadoPor} = req.body;
        const usuario = await Usuario.findById(criadoPor);
        if(!usuario){
            return res.json({ erro: 'astronauta não encontrado' });
        }
        const novaMissao = new Missao({
            nome,
            descricao,
            custo,
            categoria,
            vagasTripulacao,
            organizacao,
            estaAtiva,
            criadoPor,
        });
        await novaMissao.save();
        res.json({ sucesso: true });
    },

    editarMissao: async (req, res) => {
        const erros = validationResult(req);
        if(!erros.isEmpty()){
            return res.json({ erro: erros.mapped()});
        }

        const{ id, nome, descricao, custo, categoria, vagasTripulacao, organizacao, estaAtiva } = req.body;
        await Missao.findByIdAndUpdate(id, {
            nome,
            descricao,
            custo,
            categoria,
            vagasTripulacao,
            organizacao,
            estaAtiva,
        });
        res.json({ sucesso: true });
    },

    excluirMissao: async (req, res) =>{
        const erros = validationResult(req);
        if(!erros.isEmpty()) {
            return res.json({ erro: erros.mapped() });
        }
        const { id } = req.body;
        await Missao.findByIdAndDelete(id);
        res.json({ sucesso: true });
    },
};