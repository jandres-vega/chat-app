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
exports.localStrategy = void 0;
const passport_local_1 = require("passport-local");
const services_1 = require("../../../services");
const authService = new services_1.AuthService();
const options = {
    usernameField: 'email',
    passwordField: 'password'
};
const localStrategy = new passport_local_1.Strategy(options, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authService.getUser(email, password);
        done(null, user);
    }
    catch (e) {
        done(e);
    }
}));
exports.localStrategy = localStrategy;
