

const mongoose = require('mongoose');

async function conectaBandoDeDados(){ //async para conseguir atender mais de um cliente por vez
    try {
        console.log("A conexão com o banco de dados iniciou");
    
        //away * nao para de rodar o codigo por estar carregando o link 
        await mongoose.connect('mongodb+srv://rosapamela2004:3vwi0pFs58kuhRLj@clustermulheres.dmv5sgr.mongodb.net/?retryWrites=true&w=majority');
        
        console.log('Conexão feita com sucesso!');
    } catch(erro){
        console.log(erro);
    }
}

module.exports = conectaBandoDeDados //usado par exportar o trecho de codigo para outro arquivo
