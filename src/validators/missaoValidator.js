const { checkSchema } = require('express-validator');

module.exports = {
    acaoAdicionar: checkSchema({
        nome: {
            notEmpty: true,
            errorMessage: 'o nome da missão é obrigatorio',
        },
        descricao:{
            notEmpty: true,
            errorMessage: 'a descrição da missão é obrigatória',
        },
        custo:{
            isFloat: { min: 0 },
            errorMessage: 'o custo da missão precisa ser positivo',
        },
        categoria:{
            notEmpty: true,
            errorMessage: 'o tipo de missão e obrigatório',
        },
        vagasTripulacao:{
            isInt: { min: 0 },
            errorMessage: 'o numero de vagas não pode ser negativo',
        },
        organizacao:{
            notEmpty: true,
            errorMessage: 'a organização é obrigatória',
        },
        estaAtiva:{
            isBoolean: true,
            errorMessage: 'o status deve ser boolean',
        },
        criadoPor:{
            notEmpty: true,
            errorMessage: 'o astronauta líder é obrigatório',
        },
    }),

    acaoEditar: checkSchema({
        id:{
            notEmpty: true,
            errorMessage: ' o id da missão é obrigatório',
        },
        nome:{
            optional: true,
            notEmpty: true,
            errorMessage: 'o nome da missão é obrigatório',
        },
        descricao:{
            optional: true,
            notEmpty: true,
            errorMessage: 'descrição da missão é obrigatória',
        },
        custo:{
            optional: true,
            isFloat: { min: 0 },
            errorMessage: 'custo deve ser positivo',
        },
        categoria:{
            optional: true,
            notEmpty: true,
            errorMessage: 'tipo de missão é obrigatório',
        },
        vagasTripulacao:{
            optional: true,
            isInt: { min: 0 },
            errorMessage: 'número de vagas deve ser não negativo',
        },
        organizacao:{
            optional: true,
            notEmpty: true,
            errorMessage: 'a organização é obrigatória',
        },
        estaAtiva:{
            optional: true,
            isBoolean: true,
            errorMessage: 'os status deve ser booleano',
        },
    }),

    acaoExcluir: checkSchema({
        id: {
            notEmpty: true,
            errorMessage: 'o idD da missão é obrigatório',
        },
    }),
};