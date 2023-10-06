import {Schema} from 'mongoose';

interface Iuser {
    _id?: Schema.Types.ObjectId
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    avatar?:string
}

export {Iuser};
