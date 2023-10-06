import {Schema, model} from 'mongoose';
import {ChatMessage} from '../../types';

const chatMessageSchema = new Schema<ChatMessage>(
    {
        chat: {
            type: Schema.Types.ObjectId,
            ref: 'User'
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
    },
    {
        timestamps: true
    }
);

export const ModelChatMessages = model('ChatMessage', chatMessageSchema);
