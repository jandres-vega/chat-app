import {Router} from 'express';
import {validatorHandlers, verifyToken} from '../middlewares';
import {createChat, deleteChatById, getAllChats, getChatById} from '../controllers';
import {SchemaValidateChat, SchemaValidateParams} from '../schemas';
import {Property} from '../types';

const router:Router = Router();

router.get('/chats', verifyToken, getAllChats);
router.get('/chat/:id?', verifyToken,validatorHandlers(SchemaValidateParams, Property.params) ,getChatById);
router.delete('/chat/:id?', verifyToken, validatorHandlers(SchemaValidateParams, Property.params), deleteChatById);
router.post('/chat', verifyToken,validatorHandlers(SchemaValidateChat, Property.body) ,createChat);

export default router;
