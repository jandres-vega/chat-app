import {Schema} from 'mongoose';

type Participants = {
    type: Schema.Types.ObjectId,
    ref: string
}

interface Chat {
    participant_one: Participants,
    participant_two: Participants
}

export {Chat};
