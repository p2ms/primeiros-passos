const express = require("express"); //iniciando biblioteca express
//const { v4: uuidv4} = require("uuid"); //iniciando biblioteca uuid (APAGA APOS BD)
const router = express.Router(); //configurando a priemeira parte da rota

const conectaBandoDeDados = require('./bancoDeDados') //ligando o banco de dados
conectaBandoDeDados(); //chamando o função que conecta o banco de dados

const mulher = require('./mulherModel'); //chamando o modelMulher
const app = express(); //iniciando o app
app.use(express.json()); //assim estara tratando tbm as requisições que, a partir de agr, estara em json
const porta = 3333; //criando a porta

//lista inicial de mulheres
/*const mulheres = [
    {
        id: '1',
        nome: 'Simara Conceição',
        imagem: '',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        id:'2',
        nome: 'Iana Chan',
        imagem: '',
        minibio: 'Fundadora da Programaria'
    },
    {
        id:'3',
        nome: 'Nina da Hora',
        imagem: '',
        minibio: 'Hacker antirracista'
    }
]*/

//POST
async function criaMulher(request, response){
    //criar nova munlher - corpo da requisição
    const novaMulher = new mulher({
        //id: uuidv4(), //id unico para cada mulher [UUID] (APAGA APOS BD)
        nome: request.body.nome, //dentro da requisição(request), quando a pessoa preencher(body)
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    });

    try{
        const mulherCriada = await novaMulher.save(); //cria uma nova mulher no banco de dados(pq await? = para entrar no BD sem alterar o processamento do site)
        response.status(201).json(mulherCriada) // responde a mulher criada no servidor (status(201)? = significa que o codigo teve sucesso, 201 é o numero que é mostrado quando a resposta é criada)
    }catch(erro){
        console.log(erro);
    }

    //colocar nova mulher dentro da lista
    //mulheres.push(novaMulher); //a lista recebe a nova mulher (APAGAR APOS BD)
    //response.json(mulheres); //resposta no formato json lista atual mais nova mulher (APAGAR APOS BD)
}

//PATCH
async function corrigeMulher(request, response) {
    /*function encontreMulher(mulher){
        if (mulher.id === request.params.id){ //se os id's forem iguais irá retornar a mulher
            return mulher;
        }
    }*/ //APAGAR APOS BD

    try{
        const mulherEncontrada = await mulher.findById(request.params.id) //informa o id da mulher a partir do URL da pesquisa
        
        if(request.body.name) { //se houver alguma alteração no corpo do nome (na funçaõ correçaõ)
            mulherEncontrada.nome = request.body.nome; //o nome da mulher encontrada passa a ser o nome corrigido
        }
    
        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio;
        }
    
        if(request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem;
        }

        if(request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao;
        }

        const mulherAtualizadaNoBD = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBD);
    
    }catch(erro){
        console.log(erro);
    }

    //const mulherEncontrada = mulheres.find(encontreMulher) //primeiro pesquisa a mulher na lista (o inicio da função é aqui e depois vai para a função encontraMulher)
    //response.json(mulheres); //mulheres não existe mais
}

//GET
async function mostraMulheres(request, response){
    try{
        const mulheresVindasDoBD = await mulher.find(); //esperando a conexão acontecer para buscar todas as mulheres que starão lá
        response.json(mulheresVindasDoBD)
    }catch(erro){
        console.log(erro);
    }
    //response.json(mulheres)
}

//DELETE
async function deletaMulher(request, response){
    /*function todasMenosEla(mulher){
        if(mulher.id !== request.params.id){
            return mulher;
        }
    }
    const mulheresQueFicaram = mulheres.filter(todasMenosEla);

    response.json(mulheresQueFicaram)*/ //não precisa mais da funcao por causa do BD
    
    try{
        await mulher.findByIdAndDelete(request.params.id);
        response.json({mensagem: 'Mulher deletada com sucesso!'})
    }catch(erro){
        console.log(erro);
    }
    
}

//função PORTA
function mostraPorta() {
    console.log("Servidor criado na porta:", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //segunda parte da rota|configurando rota GET/mulheres
app.use(router.post('/mulheres', criaMulher)) //configurada rota POST/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)); //configurei a rota PATCH / mulheres
app.use(router.delete('/mulheres/:id', deletaMulher))
app.listen(porta, mostraPorta) //servidor ouvindo a porta


