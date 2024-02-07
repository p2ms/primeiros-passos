<<<<<<< HEAD
=======

>>>>>>> 1d970a60eb730ff90f8eddf8c14992c6e1b3faaf

const mongoose = require('mongoose');
require('dotenv').config()

async function conectaBandoDeDados(){ //async para conseguir atender mais de um cliente por vez
    try {
        console.log("A conexão com o banco de dados iniciou");
    
        //away * nao para de rodar o codigo por estar carregando o link 
        await mongoose.connect(process.env.MONGO_URL); // process.env.MONGO_URL para pegar o mongo_url
        
        console.log('Conexão feita com sucesso!');
    } catch(erro){
        console.log(erro);
    }
}

module.exports = conectaBandoDeDados //usado par exportar o trecho de codigo para outro arquivo
