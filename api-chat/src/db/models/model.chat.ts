import {Schema, model} from 'mongoose';
import {Chat} from '../../types';


const chatSchema = new Schema<Chat>({
    participant_one: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    participant_two: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export const ModelChat = model<Chat>('Chat', chatSchema);
