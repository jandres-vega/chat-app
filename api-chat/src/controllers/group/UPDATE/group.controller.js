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
exports.bannerParticipants = exports.addParticipants = exports.exitGroup = exports.updateGroup = void 0;
const services_1 = require("../../../services");
const serviceGroup = new services_1.GroupService();
const updateGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dataGroup = req.body;
        const groupUpdate = yield serviceGroup.updateGroup(id, dataGroup, req.file);
        res.status(201).send(groupUpdate);
    }
    catch (e) {
        next(e);
    }
});
exports.updateGroup = updateGroup;
const exitGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const groupUpdate = yield serviceGroup.exitGroup(id, userId);
        res.status(200).send(groupUpdate);
    }
    catch (e) {
        next(e);
    }
});
exports.exitGroup = exitGroup;
const addParticipants = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const newParticipants = yield serviceGroup.addParticipants(id, userId);
        res.status(200).send(newParticipants);
    }
    catch (e) {
        next(e);
    }
});
exports.addParticipants = addParticipants;
const bannerParticipants = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { groupId, userId } = req.body;
        console.log(groupId, userId);
        const response = yield serviceGroup.bannerParticipant(groupId, userId);
        res.status(200).send(response);
    }
    catch (e) {
        next(e);
    }
});
exports.bannerParticipants = bannerParticipants;
