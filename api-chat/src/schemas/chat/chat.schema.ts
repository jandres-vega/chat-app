import joi from 'joi';
const id = joi.string().hex().length(24);
const SchemaValidateChat:joi.ObjectSchema = joi.object({
    participant_one: joi.string().hex().length(24).required(),
    participant_two: joi.string().hex().length(24).required()
});
const SchemaValidateParams:joi.ObjectSchema = joi.object({
    id: id.required()
});

export {
    SchemaValidateChat,
    SchemaValidateParams
};
