import {ChatMessage} from '../types';
import Boom from '@hapi/boom';
import {Schema} from 'mongoose';
import {ModelChatMessages} from '../db';
import {getPathImage} from '../utils';

class ChatMessagesService {
    async send(dataChat:ChatMessage, idUser:Schema.Types.ObjectId){
        const {chat, message} = dataChat;
        const chatData = new ModelChatMessages({
            chat: chat,
            user: idUser,
            message,
            type: 'TEXT'
        });
        const newChat = await chatData.save();
        if (!newChat){
            throw Boom.conflict('Error al enviar mensage');
        }
        return newChat;
    }
    async sendImage(chatId:Schema.Types.ObjectId, userID: Schema.Types.ObjectId, file:Express.Multer.File){
        const chatMessage = new ModelChatMessages({
            chat: chatId,
            user: userID,
            message: getPathImage(file),
            type: 'IMAGE'
        });
        const newChat = await chatMessage.save();
        if (!newChat){
            throw Boom.conflict('Error al enviar mensage');
        }
        return newChat;

    }

    async getAlChats(id:string){
        const chatFinds = await ModelChatMessages.find({chat: id});
        const totalMessages = await ModelChatMessages.find({chat: id}).count();
        if (!chatFinds){
            throw Boom.notFound('No se rncontraron mensajes');
        }
        return {
            chats: chatFinds,
            totalMessages
        };
    }
    async getTotalMessages(id:string){
        const total = await ModelChatMessages.findOne({chat: id}).count();
        if (total === 0) throw Boom.notFound('No se encontro ingun mensaje');
        return {
            totalMessages: total
        };
    }

    async getLastMessage(id:string){
        const chatFind = await ModelChatMessages.findOne({chat:id}).sort({createdAt: -1});
        if (!chatFind) throw Boom.notFound('No se encontro ingun mensaje');
        return chatFind;
    }
}

export {ChatMessagesService};
