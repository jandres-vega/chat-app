import {Schema} from 'mongoose';

type Group = {
    type: Schema.Types.ObjectId,
    ref: string
}
type User = {
    type: Schema.Types.ObjectId,
    ref: string
}
enum Image {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}
type Type = {
    type: Schema.Types.ObjectId,
    enum: Image
}
interface GroupMessage {
    group: Group,
    user: User,
    message: string,
    type: Type
}

export {GroupMessage};
