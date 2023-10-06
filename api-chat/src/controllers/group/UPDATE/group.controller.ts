import {NextFunction, Request, Response} from 'express';
import {Group} from '../../../types';
import {GroupService} from '../../../services';
const serviceGroup = new GroupService();
const updateGroup = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const dataGroup:Group = req.body;
        const groupUpdate = await serviceGroup.updateGroup(id, dataGroup, req.file);
        res.status(201).send(groupUpdate);
    }catch (e) {
        next(e);
    }
};

const exitGroup = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const {userId} = req.body;
        const groupUpdate = await serviceGroup.exitGroup(id, userId);
        res.status(200).send(groupUpdate);
    }catch (e) {
        next(e);
    }
};

const addParticipants = async(req:Request, res:Response, next:NextFunction) =>{
    try {
        const {id} = req.params;
        const {userId} = req.body;
        const newParticipants = await serviceGroup.addParticipants(id, userId);
        res.status(200).send(newParticipants);

    }catch (e) {
        next(e);
    }
};

const bannerParticipants = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {groupId, userId} = req.body;
        console.log(groupId, userId);
        const response = await serviceGroup.bannerParticipant(groupId, userId);
        res.status(200).send(response);
    }catch (e) {
        next(e);
    }
};
export {updateGroup, exitGroup, addParticipants, bannerParticipants};
