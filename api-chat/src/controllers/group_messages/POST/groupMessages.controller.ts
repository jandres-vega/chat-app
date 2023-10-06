import {Request, Response, NextFunction} from 'express';
import {GroupMessagesService} from '../../../services';
import {PayloadJwt} from '../../../types';
import {ioSocket} from '../../../utils';
const serviceMessageGroup = new GroupMessagesService();
const sendMessageGroup = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {groupId, message} = req.body;
        const {sub} = req.user as PayloadJwt;
        const newMessage = await serviceMessageGroup.sendMessage(groupId, message, sub);
        ioSocket.sockets.in(groupId).emit('message', newMessage);
        ioSocket.sockets.in(`${groupId}_notify`).emit('message_notify', newMessage);
        res.status(200).send(newMessage);
    }catch (e) {
        next(e);
    }
};

const sendMessageGroupImage = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {groupId} = req.body;
        const {sub} = req.user as PayloadJwt;
        const newMessageImage = await serviceMessageGroup.sendImage(groupId, sub, req.file);
        ioSocket.sockets.in(groupId).emit('message', newMessageImage);
        ioSocket.sockets.in(`${groupId}_notify`).emit('message_notify', newMessageImage);
        res.status(200).send(newMessageImage);
    }catch (e) {
        next(e);
    }
};

export {sendMessageGroup, sendMessageGroupImage};
