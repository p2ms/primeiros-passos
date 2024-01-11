const express = require("express")
const router = express.Router() //Router é do pacote express

const app = express() //app é um identificador do pacote pegado na biblioteca online, ela serve para facilitar a codagem
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Pamela Rosa',
        github: 'https://github.com/p2ms',
        minibio: 'Aprendiz de programação'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)