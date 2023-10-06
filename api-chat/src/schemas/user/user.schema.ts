import joi from 'joi';

const firstname= joi.string();
const lastname= joi.string();
const email= joi.string().email();
const password= joi.string().min(8).max(12);
const id= joi.string().hex().length(24);

const SchemaValidateUser:joi.ObjectSchema = joi.object({
    _id: id,
    firstname: firstname.required(),
    lastname: lastname.required(),
    email: email.required(),
    password: password.required(),
});

const SchemaUpdateUser:joi.ObjectSchema = joi.object({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password
});
const SchemaParamsId:joi.ObjectSchema = joi.object({
    id: id.required()
});

export {
    SchemaValidateUser,
    SchemaUpdateUser,
    SchemaParamsId
};
