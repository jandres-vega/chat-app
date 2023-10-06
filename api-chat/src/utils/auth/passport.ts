import passport from 'passport';
import {localStrategy} from './strategy/local.strategy';
import {JwtStrategy} from './strategy/jwt.strategy';

passport.serializeUser((user, done) =>{
    done(null, user);
});

passport.use('local', localStrategy);
passport.use('jwt', JwtStrategy);
