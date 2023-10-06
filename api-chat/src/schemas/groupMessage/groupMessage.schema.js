"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaParamsGroupMesage = exports.SchemaValidateGroupMessage = void 0;
const joi_1 = __importDefault(require("joi"));
const SchemaValidateGroupMessage = joi_1.default.object({
    groupId: joi_1.default.string().hex().length(24).required(),
    message: joi_1.default.string().required()
});
exports.SchemaValidateGroupMessage = SchemaValidateGroupMessage;
const SchemaParamsGroupMesage = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required()
});
exports.SchemaParamsGroupMesage = SchemaParamsGroupMesage;
