import {model, Schema} from 'mongoose';
import {GroupMessage} from '../../types';

const groupMessageSchema = new Schema<GroupMessage>(
    {
        group: {
            type: Schema.Types.ObjectId,
            ref: 'Group'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        message: String,
        type: {
            type: String,
            enum: ['TEXT', 'IMAGE']
        }

    }
);

export const ModelGroupMessage = model<GroupMessage>('GroupMessage', groupMessageSchema);
