import {Request, Response, NextFunction} from 'express';
import {GroupService} from '../../../services';
import {PayloadJwt} from '../../../types';
import {getPathImage} from '../../../utils';
const serviceGroup = new GroupService();
const createGroup = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const user = req.user as PayloadJwt;
        const dataGroup = req.body;
        dataGroup.participants = JSON.parse(req.body.participants);
        dataGroup.participants = [...dataGroup.participants, user.sub];
        if (req.file){
            dataGroup.image = getPathImage(req.file);
        }
        const newGroup = await serviceGroup.createGroup(dataGroup, user.sub);
        res.status(200).send(newGroup);
    }catch (e) {
        next(e);
    }
};

export {createGroup};
