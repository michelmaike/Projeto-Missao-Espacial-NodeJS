const Usuario = require('../models/user');
const { validationResult } = require('express-validator');

module.exports = {
    obterAstronautas: async(req, res) => {
        let astronautas = await Usuario.find();
        res.json({ astronautas });
    },

    adicionarAstronauta: async (req, res) => {
        const erros = validationResult(req);
        if(!erros.isEmpty()){
            return res.json({ erro: erros.mapped() });
        }

        const { nome, email, senha } = req.body;
        const novoAstronauta = new Usuario({ nome, email, senha });
        await novoAstronauta.save();
        res.json({ sucesso: true });
    },

    editarAstronauta: async (req, res) => {
        const erros = validationResult(req);
        if(!erros.isEmpty()){
            return res.json({ erro: erros.mapped() });
        }
        const{ id, nome, email, senha } = req.body;
        await Usuario.findByIdAndUpdate(id, { nome, email, senha });
        res.json({ sucesso: true });
    },
};