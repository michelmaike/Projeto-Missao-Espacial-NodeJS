const { checkSchema } = require('express-validator');

module.exports = {
    acaoAdicionar: checkSchema({
        nome:{
            notEmpty: true,
            errorMessage: 'o nome do astronauta é obrigatório',
        },
        email:{
            isEmail: true,
            errorMessage: 'email inválido',
        },
        senha:{
            notEmpty: true,
            errorMessage: 'senha é obrigatória',
        },
    }),

    acaoEditar: checkSchema({
        id:{
            notEmpty: true,
            errorMessage: 'id do astronauta é obrigatório',
        },
        nome:{
            optional: true,
            notEmpty: true,
            errorMessage: 'nome do astronauta e obrigatório',
        },
        email:{
            optional: true,
            isEmail: true,
            errorMessage: 'email invalido',
        },
        senha:{
            optional: true,
            notEmpty: true,
            errorMessage: 'senha é obrigatória',
        },
    }),
};