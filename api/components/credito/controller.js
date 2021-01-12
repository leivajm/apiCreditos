const genero = require('../../../models').genero;

const list = async (req)=> {
    //throw new Error('error');
    

    return await  genero.findAll();
}

module.exports = {
    list,
};