import {Router} from 'express';
import {getAllMessages, getLastMessages, getTotalMessages, sendImage, sendMessage} from '../controllers';
import {upload, validatorHandlers, verifyToken} from '../middlewares';
import {SchemaMessages, SchemaParamsMessages} from '../schemas';
import {Property} from '../types';

const router:Router = Router();

router.get('/message/:id?', verifyToken, validatorHandlers(SchemaParamsMessages, Property.params), getAllMessages);
router.get('/message/total/:id?', verifyToken,validatorHandlers(SchemaParamsMessages, Property.params), getTotalMessages);
router.get('/message/last/:id?', verifyToken,validatorHandlers(SchemaParamsMessages, Property.params), getLastMessages);
router.post('/message/image', verifyToken, upload.single('image'), sendImage);
router.post('/message',verifyToken,validatorHandlers(SchemaMessages, Property.body), sendMessage);
export default router;
