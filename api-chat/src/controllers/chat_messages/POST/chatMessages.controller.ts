import {Request, Response, NextFunction} from 'express';
import {ChatMessage, PayloadJwt} from '../../../types';
import {ChatMessagesService} from '../../../services';
import {ioSocket} from '../../../utils';

const serviceChatMessage = new ChatMessagesService();
const sendMessage = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const chat:ChatMessage = req.body;
        const user = req.user as PayloadJwt;
        const chatNew = await serviceChatMessage.send(chat, user.sub);
        const data = await chatNew.populate('user');
        ioSocket.sockets.in(`${chat.chat}_notify`).emit('message', data);
        ioSocket.in(`${chat.chat}_notify`).emit('message_notify', data);
        res.status(201).send(chatNew);
    }catch (e) {
        next(e);
    }
};

const sendImage = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {chatId} = req.body;
        const user = req.user as PayloadJwt;
        const newChat = await serviceChatMessage.sendImage(chatId, user.sub, req.file);
        const data = await newChat.populate('user');
        ioSocket.sockets.in(chatId).emit('message', data);
        ioSocket.sockets.in(`${chatId}_notify`).emit('message_notify', data);
        res.status(201).send(data);
    }catch (e) {
        next(e);
    }
};
export {
    sendMessage,
    sendImage
};
