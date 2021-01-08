const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

//inicializacion de app
const http = require('http');
const app = express();

//logs en consolo de solicitudes
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//ROUTER
//app.use('/');
app.get('*', (req, res) => res.status(200).send({
    message: 'app funcionando'
}));


app.listen(3000, ()=> {
    console.log('Api escuchando en el puerto 3000');
});

module.exports = app;
