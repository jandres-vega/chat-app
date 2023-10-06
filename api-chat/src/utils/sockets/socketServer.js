"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSocketServer = exports.ioSocket = void 0;
const socket_io_1 = require("socket.io");
exports.ioSocket = null;
const initSocketServer = (server) => {
    exports.ioSocket = new socket_io_1.Server(server, {
        cors: {
            origin: '*'
        }
    });
};
exports.initSocketServer = initSocketServer;
