import {NextFunction, Request, Response} from 'express';
import {PayloadJwt} from '../../../types';
import {GroupService} from '../../../services';
const serviceGroup = new GroupService();
const getAllGroups = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const user = req.user as PayloadJwt;
        const groups = await serviceGroup.getAllGroups(user.sub);
        res.status(200).send(groups);
    }catch (e) {
        next(e);
    }
};

const getGroup = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const group = await serviceGroup.getGroup(id);
        res.status(200).send(group);
    }catch (e) {
        next(e);
    }
};

export {getAllGroups, getGroup};
