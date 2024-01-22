const express = require("express")
const router = express.Router()

const app = express() //app é um identificador do pacote pegado na biblioteca online, ela serve para facilitar a codagem
const porta = 3333

function mostraHora(require,response){
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}
no

function mostraPorta() {
    console.log('Servidor criado na porta:', porta) //"Servidor criado na porta: ${porta}" OU "Servidor criado na porta:", porta
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)