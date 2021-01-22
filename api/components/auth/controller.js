const bcrypt = require('bcrypt');
const auth = require('../../../auth');





const login = async (req)=>{
    const usuario = require('../../../models').usuario;
    const data = await usuario.findOne({
        /*include: [{
            model: estado,
            as: 'estado',
            require: true,
            attributes: [['descripcion','estado']],
            where: {
                id: 1
            }
        }],*/
        attributes: ['username','password']
    });

        //return auth.sign(data);
        return bcrypt.compare(req.body.password, data.password)
            .then(sonIguales => {
                if(sonIguales === true) {
                    //Generar token
                    return auth.sign(data);
                } else {
                    throw new Error('Informacion no valida');
                }
            });
};

module.exports = {
    login
};
