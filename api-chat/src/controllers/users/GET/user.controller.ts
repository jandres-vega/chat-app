import {Request, Response, NextFunction} from 'express';
import {ServicesUser} from '../../../services';
import {PayloadJwt} from '../../../types';

const userService = new ServicesUser();
const getControllerUsers = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const user = req.user as PayloadJwt;
        const users = await userService.getUsers(user.sub);
        res.status(200).send(users);
    }catch (e) {
        next(e);
    }
};
const getByIdControllerUser = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const user = await userService.getUserById(id);
        res.status(200).send(user);
    }catch (e) {
        next(e);
    }
};

const getMeController = async(req:Request, res:Response, next:NextFunction) => {
  try {
      const user = req.user as PayloadJwt;
      const userMe = await userService.getUserById(user.sub.toString());
      res.status(200).send(userMe);
  }  catch (e) {
      next(e);
  }
};

export {
    getControllerUsers,
    getByIdControllerUser,
    getMeController
};
