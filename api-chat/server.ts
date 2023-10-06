import {server} from './src/app';
import {connection} from './src/libs';
import {config} from './src/config';
import {ioSocket} from './src/utils';

connection().then(() =>{
    server.listen(config.port_server, () =>{
        console.log('listen on port ' + config.port_server);
        ioSocket.sockets.on('connection', (socket) =>{
            console.log('Nuevo usuario en la app');
            socket.on('disconnect', ()=>{
                console.log('Usuario desconectado');
            });
            socket.on('subscribe', (room) =>{
                socket.join(room);
            });
            socket.on('unSubscribe', (room) => {
                socket.leave(room);
            });
        });
    });
});
