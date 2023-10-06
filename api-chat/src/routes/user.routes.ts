import {Router} from 'express';
import {controllerUser, getByIdControllerUser, getControllerUsers, getMeController, updateUser} from '../controllers';
import {upload, validatorHandlers, verifyToken} from '../middlewares';
import {SchemaParamsId, SchemaUpdateUser, SchemaValidateUser} from '../schemas';
import {Property} from '../types';


const router:Router = Router();

router.get('/', verifyToken, getControllerUsers);

router.get('/me',verifyToken, getMeController);

router.get('/usr/:id?',
    verifyToken,
    validatorHandlers(SchemaParamsId, Property.params) ,
    getByIdControllerUser);

router.patch('/me',
    verifyToken,
    upload.single('avatar'),
    validatorHandlers(SchemaUpdateUser, Property.body),
    updateUser);

router.post('/register',
    validatorHandlers(SchemaValidateUser, Property.body),
    controllerUser);

export default router;
