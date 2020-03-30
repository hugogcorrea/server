const express = require('express');
const EstadoController = require('./controllers/EstadoController')
const CidadeController = require('./controllers/CidadeController')

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        message: 'Hello World',
    });
});

//estado
routes.get('/estados', EstadoController.find);
routes.post('/estados', EstadoController.create);
routes.put('/estados/:_id?', EstadoController.update);
routes.delete('/estados/:_id?', EstadoController.delete);
//cidade
routes.get('/cidades/:_id?', EstadoController.cidadesByEstado);
routes.post('/cidades', CidadeController.create);
routes.put('/cidades/:_id?', CidadeController.update);
routes.delete('/cidades/:_id?', CidadeController.delete);

module.exports = routes;