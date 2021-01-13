const express = require('express');
const controller = require('./controller');
const response = require('../../../network/response');

const router = express.Router();

const login = (req, res, next)=> {
    controller.login(req)
    .then((list)=>{
        response.success(req, res, list, 200);
    })
    .catch(e => {
        response.error(req, res, 'Información no válida!',400);
    });
}


router.post('/login', login);

module.exports = router;