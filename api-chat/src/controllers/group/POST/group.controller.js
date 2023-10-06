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
exports.createGroup = void 0;
const services_1 = require("../../../services");
const utils_1 = require("../../../utils");
const serviceGroup = new services_1.GroupService();
const createGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const dataGroup = req.body;
        dataGroup.participants = JSON.parse(req.body.participants);
        dataGroup.participants = [...dataGroup.participants, user.sub];
        if (req.file) {
            dataGroup.image = (0, utils_1.getPathImage)(req.file);
        }
        const newGroup = yield serviceGroup.createGroup(dataGroup, user.sub);
        res.status(200).send(newGroup);
    }
    catch (e) {
        next(e);
    }
});
exports.createGroup = createGroup;
