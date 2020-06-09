const express = require("express")
const server = express()

//ligar o servidor
server.listen(3000)

// configurar pasta pública
server.use(express.static("public"))



// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})





// Configurar caminhos da aplicação
// Página inicial
//req: Requisição
//res: Resposta
server.get("/", function (req, res) {
    return res.render("index.html", { title: "Seu markteplace de coleta de resíduos" })
})

server.get("/create-point.html", function (req, res) {
    return res.render("create-point.html")
})

server.get("/search-results.html", function (req, res) {
    return res.render("search-results.html")
})  