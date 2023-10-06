"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidateParams = exports.SchemaValidateChat = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string().hex().length(24);
const SchemaValidateChat = joi_1.default.object({
    participant_one: joi_1.default.string().hex().length(24).required(),
    participant_two: joi_1.default.string().hex().length(24).required()
});
exports.SchemaValidateChat = SchemaValidateChat;
const SchemaValidateParams = joi_1.default.object({
    id: id.required()
});
exports.SchemaValidateParams = SchemaValidateParams;
