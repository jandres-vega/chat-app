"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaParamsId = exports.SchemaUpdateUser = exports.SchemaValidateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const firstname = joi_1.default.string();
const lastname = joi_1.default.string();
const email = joi_1.default.string().email();
const password = joi_1.default.string().min(8).max(12);
const id = joi_1.default.string().hex().length(24);
const SchemaValidateUser = joi_1.default.object({
    _id: id,
    firstname: firstname.required(),
    lastname: lastname.required(),
    email: email.required(),
    password: password.required(),
});
exports.SchemaValidateUser = SchemaValidateUser;
const SchemaUpdateUser = joi_1.default.object({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password
});
exports.SchemaUpdateUser = SchemaUpdateUser;
const SchemaParamsId = joi_1.default.object({
    id: id.required()
});
exports.SchemaParamsId = SchemaParamsId;
