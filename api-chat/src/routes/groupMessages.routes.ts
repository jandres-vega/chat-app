import {Router} from 'express';
import {upload, verifyToken} from '../middlewares';
import {
    getAllMessagesGroup,
    getLastMessagesGroup,
    getTotalMessagesGroup,
    sendMessageGroup,
    sendMessageGroupImage
} from '../controllers';

const router: Router = Router();

router.get('/messages/:id', verifyToken, getAllMessagesGroup);
router.get('/messages/total/:id', verifyToken, getTotalMessagesGroup);
router.get('/messages/last/:id', verifyToken, getLastMessagesGroup);
router.post('/message', verifyToken, sendMessageGroup);
router.post('/message/image', verifyToken,upload.single('image') ,sendMessageGroupImage);

export default router;
