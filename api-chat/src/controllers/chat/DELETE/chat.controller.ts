import {Request, Response, NextFunction} from 'express';
import {ChatService} from '../../../services';

const serviceChat = new ChatService();
const deleteChatById = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const response = await serviceChat.deleteChat(id);
        res.status(200).json({msg:response});
    }catch (e) {
        next(e);
    }
};

export {deleteChatById};
