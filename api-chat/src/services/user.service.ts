import {ModelUser} from '../db';
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import {Iuser} from '../types';
import {Schema} from 'mongoose';


class ServicesUser {

    async getUsers(id?:Schema.Types.ObjectId){
        const users:Iuser[] = await ModelUser.find({_id:{$ne:id}}).select('-password');
        return users;
    }
    async getUserByEmail(email:string){
        const userFind = await ModelUser.findOne({email: email});
        if (!userFind){
            throw Boom.notFound('El usuario no se encuentra registrado');
        }
        return userFind;
    }
    async getUserById(id:string){
        const userFind = await ModelUser.findById(id).select('-password');
        if (!userFind){
            throw Boom.notFound('El usuario no fue encontrado');
        }
        return userFind;
    }
    async getMe(id: Schema.Types.ObjectId){
        const userMe = await ModelUser.findById(id).select('-password');
        if (!userMe){
            throw Boom.notFound('El usuario no fue encontrado');
        }
        return userMe;
    }
    async registerUser(body:Iuser){
        const {email, password} = body;

        const passBcrypt:string = await bcrypt.hash(password, 10);

        const users:Iuser[] = await this.getUsers();

        const userFind = users.find(user => user.email === email);
        if (userFind){
            throw Boom.conflict('El usuario ya se encuentra registrado');
        }else {
            const newUser = await new ModelUser({
                ...body,
                password: passBcrypt
            }).save();
            const user = newUser.toObject();
            delete user.password;
            return user;
        }
    }
    async updateAvatar(id:Schema.Types.ObjectId, data:Iuser){
        return await ModelUser.findByIdAndUpdate({_id: id}, data).select('-password');
    }
}

export {ServicesUser};
