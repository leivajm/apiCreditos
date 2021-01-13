const genero = require('../../../models').genero;
const estado = require('../../../models').estado;

const list = async (req)=> {
    //throw new Error('error');
    

    return await  genero.findAll({
        include: [{
            model: estado,
            as: 'estado',
            require: true,
            attributes: [['descripcion','estado']],
            where: {
                id: 1
            }
        }],
        attributes: ['id','descripcion']
    });
}

module.exports = {
    list,
};