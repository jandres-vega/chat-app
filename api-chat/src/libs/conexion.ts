import {connect} from 'mongoose';
import {config} from '../config';

const URL:string =  `mongodb+srv://${config.user_db}:${config.db_password}@${config.db_host}/${config.name_db}`;

const connection = async () => {
    try {
        await connect(URL);
    }catch (e) {
        console.error(e);
    }
};


export {connection};
