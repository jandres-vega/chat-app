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
exports.getMeController = exports.getByIdControllerUser = exports.getControllerUsers = void 0;
const services_1 = require("../../../services");
const userService = new services_1.ServicesUser();
const getControllerUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const users = yield userService.getUsers(user.sub);
        res.status(200).send(users);
    }
    catch (e) {
        next(e);
    }
});
exports.getControllerUsers = getControllerUsers;
const getByIdControllerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userService.getUserById(id);
        res.status(200).send(user);
    }
    catch (e) {
        next(e);
    }
});
exports.getByIdControllerUser = getByIdControllerUser;
const getMeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const userMe = yield userService.getUserById(user.sub.toString());
        res.status(200).send(userMe);
    }
    catch (e) {
        next(e);
    }
});
exports.getMeController = getMeController;
