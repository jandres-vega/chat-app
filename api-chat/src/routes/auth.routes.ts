import passport from 'passport';
import {Router} from 'express';
import {loginController} from '../controllers';
import {validatorHandlers} from '../middlewares';
import {SchemaValidateLogin} from '../schemas/auth/auth.schema';
import {Property} from '../types';


const router:Router = Router();

router.post('/login',
    passport.authenticate('local'),
    validatorHandlers(SchemaValidateLogin, Property.body),
    loginController);

export default router;
