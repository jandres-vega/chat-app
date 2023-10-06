"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidateLogin = void 0;
const joi_1 = __importDefault(require("joi"));
const SchemaValidateLogin = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).max(12)
});
exports.SchemaValidateLogin = SchemaValidateLogin;
