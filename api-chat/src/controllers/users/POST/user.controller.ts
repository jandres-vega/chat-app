import {Request, Response, NextFunction} from 'express';
import {ServicesUser} from '../../../services';

const serviceUser = new ServicesUser();

const controllerUser = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const data = req.body;
        const user = await serviceUser.registerUser(data);
        res.status(200).send(user);
    }catch (e) {
        next(e);
    }

};

export {controllerUser};
