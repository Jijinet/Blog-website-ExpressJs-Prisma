const Joi = require('@hapi/joi');

const registerValidation=data =>{

    const schema={
        nom:Joi.string().min(6).required(),
        email:Joi.string().min(10).required().email(),
        password:Joi.string().min(6).required(),
        role:Joi.string()
    }

    return Joi.validate(data,schema);
}


const loginValidation=data =>{

    const schema={
        email:Joi.string().min(10).required().email(),
        password:Joi.string().min(6).required(),
    }

    return Joi.validate(data,schema);
}

module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;