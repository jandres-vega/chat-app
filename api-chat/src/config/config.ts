import dotenv from 'dotenv';
import {Config} from '../types';

dotenv.config();

const config:Config = {
    db_host: process.env.DB_HOST as string,
    db_password: process.env.DB_PASSWORD as string,
    ip_server: process.env.IP_SERVER as string,
    port_server: process.env.PORT_SERVER as string,
    user_db: process.env.USER_DB as string,
    name_db: process.env.NAME_DB as string,
    jwt_secret: process.env.JWT_SECRET as string
};

export {config};
