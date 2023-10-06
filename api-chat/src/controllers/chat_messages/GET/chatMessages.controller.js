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
exports.getLastMessages = exports.getTotalMessages = exports.getAllMessages = void 0;
const services_1 = require("../../../services");
const serviceChatMessages = new services_1.ChatMessagesService();
const getAllMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const messages = yield serviceChatMessages.getAlChats(id);
        res.status(200).send(messages);
    }
    catch (e) {
        next(e);
    }
});
exports.getAllMessages = getAllMessages;
const getTotalMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const total = yield serviceChatMessages.getTotalMessages(id);
        res.status(200).send(total);
    }
    catch (e) {
        next(e);
    }
});
exports.getTotalMessages = getTotalMessages;
const getLastMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const lastMessages = yield serviceChatMessages.getLastMessage(id);
        res.status(200).send(lastMessages);
    }
    catch (e) {
        next(e);
    }
});
exports.getLastMessages = getLastMessages;
