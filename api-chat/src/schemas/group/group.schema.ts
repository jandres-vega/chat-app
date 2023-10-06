import joi from 'joi';

const SchemaValidateGroup:joi.ObjectSchema = joi.object({
    name: joi.string().hex().length(24).required(),
    participants: joi.array().required()
});

const SchemaValidateGroupParams:joi.ObjectSchema = joi.object({
    id: joi.string().hex().length(24).required()
});

export {SchemaValidateGroup, SchemaValidateGroupParams};
