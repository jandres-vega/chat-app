import {Request, Response, NextFunction} from 'express';
import {AuthService} from '../../../services';
import {Iuser} from '../../../types';

const serviceAuth = new AuthService();
const loginController = async(req: Request, res:Response, next:NextFunction) => {
    try {
        const dataLogin:Iuser = req.user as Iuser;
        const response = await serviceAuth.signUser(dataLogin);
        res.status(200).json({access: response});
    }catch (e) {
        next(e);
    }
};

export {loginController};
