import Boom from '@hapi/boom';
import {ModelGroup, ModelUser} from '../db';
import {Group} from '../types';
import {Schema} from 'mongoose';
import {getPathImage} from '../utils';
class GroupService {
    async createGroup(data:Group, idUser:Schema.Types.ObjectId){
        const group = new ModelGroup(data);
        group.creator = idUser;
        const newGroup = await group.save();
        if (!newGroup) throw Boom.conflict('No se pudo crear el grupo');
        return newGroup;
    }
    async getAllGroups(idUser:Schema.Types.ObjectId){
        const userGroupFind = await ModelGroup.findOne({participants: idUser})
            .populate('creator')
            .populate('participants');
        if (!userGroupFind) throw Boom.notFound('No se encontrron grupos');
        return userGroupFind;
    }
    async getGroup(idGroup:string){
        const groupFind = await ModelGroup.findById(idGroup).populate('participants');
        if (!groupFind) throw Boom.notFound('No se encontro ningun grupo');
        return groupFind;
    }
    async updateGroup(idGroup:string, data:Group, image:Express.Multer.File){
        const groupFind:Group = await ModelGroup.findById(idGroup).populate('participants');
        const {name} = data;
        if (name) groupFind.name = name;
        if (image){
            groupFind.image = getPathImage(image);
        }
        const groupUpdate = await ModelGroup.findByIdAndUpdate(idGroup, groupFind, {new: true});
        if (!groupUpdate) throw  Boom.conflict('No se pudo actualizar el grupo');
        return groupUpdate;
    }
    async exitGroup(idGroup:string, idUser:string){
        const groupFind = await ModelGroup.findById(idGroup);
        if (!groupFind) throw Boom.notFound('No se encontro ningun grupo');
        const newParticipants = groupFind.participants.filter((participant) => (participant.toString()!== idUser));
        const newData = {
            ...groupFind.toObject(),
            participants: newParticipants
        };
        await ModelGroup.findByIdAndUpdate(idGroup, newData);
        return {message: 'Salida exitosa'};
    }
    async addParticipants(idGroup:string, idUser:string){
        const groupFind = await ModelGroup.findById(idGroup);
        const users = await ModelUser.find({_id: idUser});
        const arrayObjectId = [];
        users.forEach((user) => {
            arrayObjectId.push(user._id);
        });
        const newData = {
            ...groupFind.toObject(),
            participants: [...groupFind.participants, ...arrayObjectId]
        };
        await ModelGroup.findByIdAndUpdate(idGroup, newData);
        return {message: 'Usuario agregado correctamente'};
    }
    async bannerParticipant(idGroup:string, idUser:string){
        const groupFind= await ModelGroup.findById(idGroup);
        const newParticipants = groupFind.participants.filter(participant =>(
            participant.toString() !== idUser
        ));
        const newDta = {
            ...groupFind.toObject(),
            participants: newParticipants
        };
        await ModelGroup.findByIdAndUpdate(idGroup, newDta);
        return {message: 'Baneo exitosamente'};
    }

}

export {GroupService};
