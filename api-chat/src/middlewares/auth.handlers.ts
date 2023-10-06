import {Request, Response, NextFunction} from 'express';
import {PayloadJwt} from '../types';
import passport from 'passport';
import Boom from '@hapi/boom';

const verifyToken = (req: Request, res:Response, next:NextFunction) => {
    passport.authenticate('jwt', {session: false}, async(err:Error, user:PayloadJwt) =>{
        if (err) {
            return next(err);
        }
        if (!user) return next(Boom.unauthorized());
        req.user = user;
        next();
    })(req, res, next);
};

export {verifyToken};
