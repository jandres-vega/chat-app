import {Schema} from 'mongoose';
interface Group {
    name:string,
    image:string,
    creator?: Schema.Types.ObjectId,
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: string
        }
    ]
}

export {Group};
