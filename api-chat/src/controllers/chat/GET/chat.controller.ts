import {NextFunction, Request, Response} from 'express';
import {Chat, PayloadJwt} from '../../../types';
import {ChatService} from '../../../services';
const serviceChat = new ChatService();
const getAllChats = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const user = req.user as PayloadJwt;
        const chats:Chat[] = await serviceChat.getAllChats(user.sub);
        res.status(200).send(chats);
    }catch (e) {
        next(e);
    }
};

const getChatById = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const chat:Chat = await serviceChat.getChat(id);
        res.status(200).send(chat);
    }catch (e) {
        next(e);
    }
};



export {
    getAllChats,
    getChatById
};
