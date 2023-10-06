import Boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {ServicesUser} from './user.service';
import {Iuser, PayloadJwt} from '../types';

import {config} from '../config';

const serviceUser = new ServicesUser();

class AuthService {

    async getUser(email:string, password: string){
        const user:Iuser = await serviceUser.getUserByEmail(email);
        if (!user){
            throw Boom.unauthorized();
        }
        const isMatch:boolean = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw Boom.unauthorized();
        }
        delete user.password;
        return user;

    }

    async signUser(user:Iuser){
        const expToken = new Date();
        expToken.setMonth(expToken.getMonth() + 1);
        const payload:PayloadJwt = {
            sub: user._id,
            token_type: 'access',
            iat: Date.now(),
            expToken: expToken
        };
        const token:string = jwt.sign(payload, config.jwt_secret);
        return token;
    }
}
export {AuthService};
