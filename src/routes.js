const express = require('express');
const EstadoController = require('./controllers/EstadoController')
const CidadeController = require('./controllers/CidadeController')
const cors = require('cors')
const routes = express.Router();
var app = express()
app.use(cors())

routes.get('/', (req, res) => {
    return res.json({
        message: 'Hello World',
    });
});

//estado
routes.get('/estados',cors(), EstadoController.find);
routes.post('/estados', cors(), EstadoController.create);
routes.put('/estados/:_id?', cors(), EstadoController.update);
routes.delete('/estados/:_id?', cors(), EstadoController.delete);
//cidade
routes.get('/cidades/:_id?',cors(), EstadoController.cidadesByEstado);
routes.post('/cidades', cors(),CidadeController.create);
routes.put('/cidades/:_id?',cors(), CidadeController.update);
routes.delete('/cidades/:_id?', CidadeController.delete);

module.exports = routes;