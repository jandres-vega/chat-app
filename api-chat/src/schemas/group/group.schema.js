"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidateGroupParams = exports.SchemaValidateGroup = void 0;
const joi_1 = __importDefault(require("joi"));
const SchemaValidateGroup = joi_1.default.object({
    name: joi_1.default.string().hex().length(24).required(),
    participants: joi_1.default.array().required()
});
exports.SchemaValidateGroup = SchemaValidateGroup;
const SchemaValidateGroupParams = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required()
});
exports.SchemaValidateGroupParams = SchemaValidateGroupParams;
