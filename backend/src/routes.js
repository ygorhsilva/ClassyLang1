const express = require('express');
const LinguagensController = require('./controllers/LinguagensController');
const ParadigmasController = require('./controllers/ParadigmasController');
const LinguagensAddController = require('./controllers/LinguagensAddController');

const routes = express.Router();

routes.post('/linguagens/store', LinguagensController.store);
routes.get('/linguagens/index', LinguagensController.index);
routes.get('/linguagens/:nome', LinguagensController.find);



routes.post('/linguagensAdd/store', LinguagensAddController.store);
routes.get('/linguagensAdd/index', LinguagensAddController.index);

routes.post('/paradigma/store', ParadigmasController.store);
routes.get('/paradigma/index', ParadigmasController.index);
routes.get('/paradigma/:nome', ParadigmasController.findOne);

module.exports = routes;

