import {Request, Response, NextFunction} from 'express';
import Boom from '@hapi/boom';
import {TypeErrors} from '../types';
const logErrors = (error:Error, req:Request, res:Response, next:NextFunction) => {
    console.error(error);
    next(error);
};

const boomErrorHandler = (error:Error, req:Request, res:Response, next:NextFunction) => {
    if (Boom.isBoom(error)){
        const {output} = error;
        res.status(output.statusCode).json(output.payload);
    }
    next(error);
};

const errorHandler = (error:Error, req:Request, res:Response, next:NextFunction) => {
    const typeErrors:TypeErrors = {
        message: error.message,
        stack: error.stack
    };
    res.status(500).json(typeErrors);
};

export {
    logErrors,
    boomErrorHandler,
    errorHandler
};
