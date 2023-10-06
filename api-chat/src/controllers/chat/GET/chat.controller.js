"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChatById = exports.getAllChats = void 0;
const services_1 = require("../../../services");
const serviceChat = new services_1.ChatService();
const getAllChats = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const chats = yield serviceChat.getAllChats(user.sub);
        res.status(200).send(chats);
    }
    catch (e) {
        next(e);
    }
});
exports.getAllChats = getAllChats;
const getChatById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const chat = yield serviceChat.getChat(id);
        res.status(200).send(chat);
    }
    catch (e) {
        next(e);
    }
});
exports.getChatById = getChatById;
