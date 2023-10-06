import {Schema, Types} from 'mongoose';
import {ModelChat} from '../db';
import {Chat} from '../types';
import Boom from '@hapi/boom';

class ChatService {
    async createChat(idOne:Types.ObjectId, idTwo:Types.ObjectId){

        const chatFindOne = await ModelChat.findOne({participant_one: idOne, participant_two: idTwo});
        const chatFindTwo = await ModelChat.findOne({participant_two: idTwo, participant_one: idOne});

        if (chatFindOne || chatFindTwo){
            throw Boom.conflict('Ya tienes un chat creado');
        }
        const chat = new ModelChat({
            participant_one: idOne,
            participant_two: idTwo
        });
        return await chat.save();
    }
    async getAllChats(idUser: Schema.Types.ObjectId){
        const chats:Chat[] = await ModelChat.find({$or: [{participant_one: idUser}, {participant_two: idUser}]})
            .populate('participant_one').populate('participant_two');
        if (!chats){
            throw Boom.notFound('No se ha encontrado ningum chat');
        }
        return chats;
    }
    async deleteChat(id:string){
        await ModelChat.findByIdAndDelete(id);
        return 'Chat eliminado';
    }
    async getChat(id:string){
        const chatFind:Chat = await ModelChat.findById(id)
            .populate('participant_one')
            .populate('participant_two');
        if (!chatFind){
            throw Boom.notFound('No se ha encontrado ningun chat');
        }
        return chatFind;
    }
}
export {ChatService};
