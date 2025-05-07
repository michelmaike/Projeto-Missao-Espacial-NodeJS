const express = require('express');
const roteador = express.Router();
const controladorUsuario = require('../controllers/userController');
const controladorMissao = require('../controllers/missaoController');
const validadorUsuario = require('../validators/userValidator');
const validadorMissao = require('../validators/missaoValidator');

roteador.get('/ping', (req, res) => {
    res.json({ retorno: true });
});

roteador.get('/astronautas', controladorUsuario.obterAstronautas);
roteador.post('/astronautas', validadorUsuario.acaoAdicionar, controladorUsuario.adicionarAstronauta);
roteador.put('/astronautas', validadorUsuario.acaoEditar, controladorUsuario.editarAstronauta);

roteador.get('/missoes', controladorMissao.obterMissoes);
roteador.post('/missoes', validadorMissao.acaoAdicionar, controladorMissao.adicionarMissao);
roteador.put('/missoes', validadorMissao.acaoEditar, controladorMissao.editarMissao);
roteador.delete('/missoes', validadorMissao.acaoExcluir, controladorMissao.excluirMissao);

module.exports = roteador;