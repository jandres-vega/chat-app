import {Strategy, IStrategyOptions} from 'passport-local';
import {AuthService} from '../../../services';
import {Iuser} from '../../../types';

const authService = new AuthService();

const options: IStrategyOptions = {
    usernameField: 'email',
    passwordField: 'password'
};
const localStrategy = new Strategy(options, async(email:string, password:string, done)=>{
    try {
        const user:Iuser = await authService.getUser(email, password);
        done(null, user);
    }catch (e) {
        done(e);
    }
});

export {localStrategy};
