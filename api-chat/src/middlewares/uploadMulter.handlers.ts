import {Request} from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req:Request, file:Express.Multer.File, cb:(error: Error | null, destination: string) => void) =>{
        cb(null, 'src/uploads/avatar');
    },
    filename(req:Request, file: Express.Multer.File, cb: (error: (Error | null), filename: string) => void) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

export {upload};
