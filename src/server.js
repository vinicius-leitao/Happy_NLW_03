// Importar dependencias

const express = require("express");
const path = require("path");
const pages = require("./pages.js")

// Iniciando o express
const server = express();

// Utilizando os arquivos statics
server
.use(express.static('public'))


// Configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Criar uma rota
server.get("/", pages.index)
server.get("/orphanage", pages.orphanage)
server.get("/orphanages", pages.orphanages)
server.get("/create-orphanage", pages.createOrphanage)

// Ligar o servidor
server.listen(5500)