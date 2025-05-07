const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const esquemaModelo = new mongoose.Schema({
    nome: String, //nome da missão
    descricao: String, //descrição da missão
    custo: Number, //custo da missão
    categoria: String, //tipo de missão
    vagasTripulacao: Number, //vagas para astronauta
    organizacao: String, //nome da organização: exmplo: "Nasa", "Space x"
    estaAtiva: Boolean, //status da missão
    criadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }, //astronauta líder
});

const nomeModelo = 'Missao';

if(mongoose.connection && mongoose.connection.models[nomeModelo]){
    module.exports = mongoose.connection.models[nomeModelo];
}else{
    module.exports = mongoose.model(nomeModelo, esquemaModelo);
}