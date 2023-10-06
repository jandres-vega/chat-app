import {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import {ChatService} from '../../../services';

const serviceChat = new ChatService();
const createChat = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {participant_one, participant_two} = req.body;
        const idOne = new Types.ObjectId(participant_one);
        const idTwo = new Types.ObjectId(participant_two);
        const response = await serviceChat.createChat(idOne, idTwo);
        res.status(200).send(response);
    }catch (e) {
        next(e);
    }
};


export {createChat};
