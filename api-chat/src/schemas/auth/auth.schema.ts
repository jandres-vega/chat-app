import joi from 'joi';

const SchemaValidateLogin = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(12)
});

export {
    SchemaValidateLogin
};
