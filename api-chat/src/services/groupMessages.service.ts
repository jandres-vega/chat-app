import Boom from '@hapi/boom';
import {ModelGroupMessage} from '../db';
import {Schema} from 'mongoose';
import {getPathImage} from '../utils';

class GroupMessagesService {
    async sendMessage(groupId:string, message:string, userId:Schema.Types.ObjectId){
        const groupMessage = new ModelGroupMessage({
            group: groupId,
            user: userId,
            message,
            type: 'TEXT'
        });
        const newMessage = await groupMessage.save();
        if (!newMessage) throw Boom.conflict('No se pudo enviar el mensage');
        const data = await newMessage.populate('user');
        return data;
    }
    async sendImage(groupId:string, userId:Schema.Types.ObjectId, image:Express.Multer.File){
        const newMessage = new ModelGroupMessage({
            group: groupId,
            user: userId,
            message: getPathImage(image),
            type: 'IMAGE'
        });
        const newMessageImage = await newMessage.save();
        if (!newMessageImage) throw Boom.conflict('No se pudo enviar el mensage');
        return await newMessageImage.populate('user');
    }
    async getAlMessages(groupId:string){
        const message = await ModelGroupMessage.find({group: groupId})
            .sort({createAt: 1})
            .populate('user');
        const total = await ModelGroupMessage.find({group: groupId}).count();
        return {
            message: message,
            total: total
        };
    }
    async getTotalMessages(groupId:string){
        const total = await ModelGroupMessage.find({group: groupId}).count();
        return {total:total};
    }
    async getLastMessage(groupId:string){
        const message = await ModelGroupMessage.findOne({group: groupId})
            .sort({createAt: -1})
            .populate('user');
        return message;
    }
}
export {GroupMessagesService};
