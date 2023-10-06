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
exports.getLastMessagesGroup = exports.getTotalMessagesGroup = exports.getAllMessagesGroup = void 0;
const services_1 = require("../../../services");
const serviceMessageGroup = new services_1.GroupMessagesService();
const getAllMessagesGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const allMessages = yield serviceMessageGroup.getAlMessages(id);
        res.status(200).send(allMessages);
    }
    catch (e) {
        next(e);
    }
});
exports.getAllMessagesGroup = getAllMessagesGroup;
const getTotalMessagesGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const totalMessages = yield serviceMessageGroup.getTotalMessages(id);
        res.status(200).send(totalMessages);
    }
    catch (e) {
        next(e);
    }
});
exports.getTotalMessagesGroup = getTotalMessagesGroup;
const getLastMessagesGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const lastMessage = yield serviceMessageGroup.getLastMessage(id);
        res.status(200).send(lastMessage);
    }
    catch (e) {
        next(e);
    }
});
exports.getLastMessagesGroup = getLastMessagesGroup;
