const express = require('express');
const controller = require('./controller');
const response = require('../../../network/response');

const router = express.Router();


const list = (req, res, next) => {
    controller.list(req)
    .then((list)=>{
        response.success(req, res, list, 200);
    })
    .catch(next);
};


router.get('/', list);

module.exports = router;
