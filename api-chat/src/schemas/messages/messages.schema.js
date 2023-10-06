"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaParamsMessages = exports.SchemaMessages = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string().hex().length(24);
const SchemaMessages = joi_1.default.object({
    chat: id.required(),
    message: joi_1.default.string()
});
exports.SchemaMessages = SchemaMessages;
const SchemaParamsMessages = joi_1.default.object({
    id: id.required()
});
exports.SchemaParamsMessages = SchemaParamsMessages;
