const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const credito = require('./components/credito/network');
const error = require('./../network/error');
const catalogo = require('./components/catalogo/network');
const auth = require('./components/auth/network');


//inicializacion de app
const http = require('http');
const app = express();

//logs en consolo de solicitudes
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//ROUTER
//app.use('/');
/*
app.get('*', (req, res) => res.status(200).send({
    message: 'app funcionando'
}));
*/
app.use('/api/auth', auth);
app.use('/api/credito',credito);
app.use('/api/catalogo',catalogo);


app.use(error);

app.listen(3000, ()=> {
    console.log('Api escuchando en el puerto 3000');
});

module.exports = app;

