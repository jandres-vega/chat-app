import * as http from 'http';
import {Server as SocketServer} from 'socket.io';


export let ioSocket:SocketServer = null;

const initSocketServer = (server:http.Server) => {
    ioSocket = new SocketServer(server, {
        cors: {
            origin: '*'
        }
    });
};

export {initSocketServer};
