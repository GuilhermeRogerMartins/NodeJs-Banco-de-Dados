const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoControllers');


//Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato e outras 
route.get('/contato', contatoController.paginaInicial);

module.exports = route;























//// Somente um exemplo de modo de fazer a pagina.
// function meMiddleware(req, res, next) {
//     req.session = { nome: 'Gui', sobrenome: 'Roger' };
//     console.log();
//     console.log('passei aqui....... ');
//     console.log();
//     next();
// }