const express = require("express")
const router = express.Router() //Router é do pacote express

const app = express() //app é um identificador do pacote pegado na biblioteca online, ela serve para facilitar a codagem
const porta = 3333

function mostraOla(request, response) {
    response.send("Olá, mundo!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)