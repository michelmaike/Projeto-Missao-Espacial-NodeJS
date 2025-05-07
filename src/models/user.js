const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const esquemaModelo = new mongoose.Schema({
    nome: String, //nome do astronauta
    email: String, //email da agência
    senha: String, //credencial para acesso
});

const nomeModelo = 'Usuario';

if(mongoose.connection && mongoose.connection.models[nomeModelo]) {
    module.exports = mongoose.connection.models[nomeModelo];
}else{
    module.exports = mongoose.model(nomeModelo, esquemaModelo);
}