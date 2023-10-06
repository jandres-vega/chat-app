import express, {Express} from 'express';
import {createServer, Server} from 'http';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import './utils/auth/passport';
import {initSocketServer} from './utils';
import {routes} from './routes';
import {boomErrorHandler, errorHandler, logErrors} from './middlewares';
import {config} from './config';

const app:Express = express();

const server:Server = createServer(app);
initSocketServer(server);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(session({
    secret: config.jwt_secret,
    resave: false,
    saveUninitialized: false
}));

routes(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

export {server};
