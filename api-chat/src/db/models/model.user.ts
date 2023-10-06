import {model, Schema} from 'mongoose';
import {Iuser} from '../../types/index';

const userSchema = new Schema<Iuser>({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: String
});

export const ModelUser = model<Iuser>('User', userSchema);


