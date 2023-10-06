"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const local_strategy_1 = require("./strategy/local.strategy");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.use('local', local_strategy_1.localStrategy);
passport_1.default.use('jwt', jwt_strategy_1.JwtStrategy);
