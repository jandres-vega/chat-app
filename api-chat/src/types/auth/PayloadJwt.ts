import {Schema} from 'mongoose';

interface PayloadJwt {
    sub: Schema.Types.ObjectId,
    token_type: string,
    iat: number,
    expToken: Date
}
export {PayloadJwt};
