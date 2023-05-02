const express = require('express')
const routes = require('./routes')
const cors = require("cors");
const app = express()
const port = 3001

app.use(cors({
    origin: '*'
}))

routes(app)

app.listen(port, () =>
    console.log(`Servidor está rodando na porta ${port}`)
)

module.exports = app