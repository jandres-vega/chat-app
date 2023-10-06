import {Router} from 'express';
import {
    addParticipants,
    bannerParticipants,
    createGroup,
    exitGroup,
    getAllGroups,
    getGroup,
    updateGroup
} from '../controllers';
import {upload, validatorHandlers, verifyToken} from '../middlewares';
import {SchemaValidateGroupParams} from '../schemas';
import {Property} from '../types';


const router:Router = Router();

router.get('/', verifyToken, getAllGroups);
router.get('/:id', verifyToken, getGroup);
router.patch('/bannear', verifyToken, bannerParticipants);
router.patch('/:id',
    verifyToken,
    upload.single('image'),
    updateGroup);
router.patch('/exit/:id?',
    verifyToken,
    validatorHandlers(SchemaValidateGroupParams, Property.params), exitGroup);
router.patch('/add/:id?',
    verifyToken,
    validatorHandlers(SchemaValidateGroupParams, Property.params),
    addParticipants);
router.post('/',verifyToken,upload.single('image'), createGroup);

export default router;
