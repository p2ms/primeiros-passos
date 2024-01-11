const express = require("express")

const app = express() //app é um identificador do pacote pegado na biblioteca online, ela serve para facilitar a codagem
const porta = 3333

function mostraPorta() {
    console.log("Servidor criado na porta:", porta)
}

app.listen(porta, mostraPorta)