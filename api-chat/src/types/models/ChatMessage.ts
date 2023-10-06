import {Schema} from 'mongoose';

type Chat = {
    type: Schema.Types.ObjectId,
    ref: string
}
type User = {
    type: Schema.Types.ObjectId,
    ref: string
}
enum Image {
    TEXT ='TEXT',IMAGE= 'IMAGE'
}
type Type = {
    type: Schema.Types.ObjectId,
    enum: Image
}
interface ChatMessage {
    chat: Chat,
    user?: User,
    message: string,
    type?: Type
}

export {ChatMessage};
