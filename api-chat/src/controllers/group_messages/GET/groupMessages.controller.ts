import {Request, Response, NextFunction} from 'express';
import {GroupMessagesService} from '../../../services';
const serviceMessageGroup = new GroupMessagesService();
const getAllMessagesGroup = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const allMessages = await serviceMessageGroup.getAlMessages(id);
        res.status(200).send(allMessages);
    }catch (e) {
        next(e);
    }
};

const getTotalMessagesGroup = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const totalMessages = await serviceMessageGroup.getTotalMessages(id);
        res.status(200).send(totalMessages);
    }catch (e) {
        next(e);
    }
};

const getLastMessagesGroup = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const lastMessage = await serviceMessageGroup.getLastMessage(id);
        res.status(200).send(lastMessage);
    }catch (e) {
        next(e);
    }
};

export {getAllMessagesGroup, getTotalMessagesGroup, getLastMessagesGroup};
