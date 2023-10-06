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
exports.sendImage = exports.sendMessage = void 0;
const services_1 = require("../../../services");
const utils_1 = require("../../../utils");
const serviceChatMessage = new services_1.ChatMessagesService();
const sendMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chat = req.body;
        const user = req.user;
        const chatNew = yield serviceChatMessage.send(chat, user.sub);
        const data = yield chatNew.populate('user');
        utils_1.ioSocket.sockets.in(`${chat.chat}_notify`).emit('message', data);
        utils_1.ioSocket.in(`${chat.chat}_notify`).emit('message_notify', data);
        res.status(201).send(chatNew);
    }
    catch (e) {
        next(e);
    }
});
exports.sendMessage = sendMessage;
const sendImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { chatId } = req.body;
        const user = req.user;
        const newChat = yield serviceChatMessage.sendImage(chatId, user.sub, req.file);
        const data = yield newChat.populate('user');
        utils_1.ioSocket.sockets.in(chatId).emit('message', data);
        utils_1.ioSocket.sockets.in(`${chatId}_notify`).emit('message_notify', data);
        res.status(201).send(data);
    }
    catch (e) {
        next(e);
    }
});
exports.sendImage = sendImage;
