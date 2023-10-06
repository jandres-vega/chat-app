import joi from 'joi';

const id = joi.string().hex().length(24);

const SchemaMessages:joi.ObjectSchema = joi.object({
    chat: id.required(),
    message:joi.string()
});

const SchemaParamsMessages = joi.object({
    id: id.required()
});

export {
    SchemaMessages,
    SchemaParamsMessages
};
