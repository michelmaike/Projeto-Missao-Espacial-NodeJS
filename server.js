const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config({ path: 'variables.env' });

const roteadoresApi = require('./src/routes/router');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (erro) => {
    console.error("erro: "+erro.message);
});

const servidor = express();
servidor.use(cors());
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));
servidor.use("/", roteadoresApi);

servidor.listen(process.env.PORT, () => {
    console.log("servidor rodando na porta"+process.env.PORT);
});