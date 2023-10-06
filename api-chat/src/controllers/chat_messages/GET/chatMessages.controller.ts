import {Request, Response, NextFunction} from 'express';
import {ChatMessagesService} from '../../../services';

const serviceChatMessages = new ChatMessagesService();
const getAllMessages = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const messages = await serviceChatMessages.getAlChats(id);
        res.status(200).send(messages);
    }catch (e) {
        next(e);
    }
};

const getTotalMessages = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const total = await serviceChatMessages.getTotalMessages(id);
        res.status(200).send(total);
    }catch (e) {
        next(e);
    }
};

const getLastMessages = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const lastMessages = await serviceChatMessages.getLastMessage(id);
        res.status(200).send(lastMessages);
    }catch (e) {
        next(e);
    }
};
export {
    getAllMessages,
    getTotalMessages,
    getLastMessages
};
