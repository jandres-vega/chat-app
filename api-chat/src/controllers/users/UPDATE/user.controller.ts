import {Request, Response, NextFunction} from 'express';
import {ServicesUser} from '../../../services';
import {getPathImage} from '../../../utils';
import {PayloadJwt} from '../../../types';

const userService = new ServicesUser();
const updateUser = async(req: Request, res: Response, next:NextFunction) => {
    try {
        const user = req.user as PayloadJwt;
        const userData = req.body;
        if (req.file){
            userData.avatar = getPathImage(req.file);
        }
        const userUpdate = await userService.updateAvatar(user.sub, userData);
        res.status(200).send(userUpdate);
    }catch (e) {
        next(e);
    }
};

export {updateUser};
