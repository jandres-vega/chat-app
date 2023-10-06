import joi from 'joi';

const SchemaValidateGroupMessage:joi.ObjectSchema = joi.object({
    groupId: joi.string().hex().length(24).required(),
    message: joi.string().required()
});

const SchemaParamsGroupMesage:joi.ObjectSchema = joi.object({
    id: joi.string().hex().length(24).required()
});

export {SchemaValidateGroupMessage, SchemaParamsGroupMesage};
