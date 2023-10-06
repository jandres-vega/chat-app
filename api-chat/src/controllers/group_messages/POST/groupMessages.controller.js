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
exports.sendMessageGroupImage = exports.sendMessageGroup = void 0;
const services_1 = require("../../../services");
const utils_1 = require("../../../utils");
const serviceMessageGroup = new services_1.GroupMessagesService();
const sendMessageGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { groupId, message } = req.body;
        const { sub } = req.user;
        const newMessage = yield serviceMessageGroup.sendMessage(groupId, message, sub);
        utils_1.ioSocket.sockets.in(groupId).emit('message', newMessage);
        utils_1.ioSocket.sockets.in(`${groupId}_notify`).emit('message_notify', newMessage);
        res.status(200).send(newMessage);
    }
    catch (e) {
        next(e);
    }
});
exports.sendMessageGroup = sendMessageGroup;
const sendMessageGroupImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { groupId } = req.body;
        const { sub } = req.user;
        const newMessageImage = yield serviceMessageGroup.sendImage(groupId, sub, req.file);
        utils_1.ioSocket.sockets.in(groupId).emit('message', newMessageImage);
        utils_1.ioSocket.sockets.in(`${groupId}_notify`).emit('message_notify', newMessageImage);
        res.status(200).send(newMessageImage);
    }
    catch (e) {
        next(e);
    }
});
exports.sendMessageGroupImage = sendMessageGroupImage;
