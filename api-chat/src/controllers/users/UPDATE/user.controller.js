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
exports.updateUser = void 0;
const services_1 = require("../../../services");
const utils_1 = require("../../../utils");
const userService = new services_1.ServicesUser();
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const userData = req.body;
        if (req.file) {
            userData.avatar = (0, utils_1.getPathImage)(req.file);
        }
        const userUpdate = yield userService.updateAvatar(user.sub, userData);
        res.status(200).send(userUpdate);
    }
    catch (e) {
        next(e);
    }
});
exports.updateUser = updateUser;
