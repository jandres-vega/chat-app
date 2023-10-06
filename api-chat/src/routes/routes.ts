import {Express, Router} from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import chatRoutes from './chat.routes';
import chatMessagesRoutes from './chatMessages.routes';
import groupRoutes from './group.routres';
import groupMessagesRoutes from './groupMessages.routes';
function routes(app:Express) {
    const router:Router = Router();
    app.use('/api/v1', router);
    router.use('/user', userRoutes);
    router.use('/auth', authRoutes);
    router.use('/users', chatRoutes);
    router.use('/chat', chatMessagesRoutes);
    router.use('/group', groupRoutes);
    router.use('/group', groupMessagesRoutes);
}
export {routes};
