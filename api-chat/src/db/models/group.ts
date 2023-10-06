import {model, Schema} from 'mongoose';
import {Group} from '../../types';

const groupSchema = new Schema<Group>({
    name: String,
    image: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

export const ModelGroup = model<Group>('Group', groupSchema);
