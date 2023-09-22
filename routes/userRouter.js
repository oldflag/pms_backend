import { Router } from 'express';
import { register, login, getAll, updateStatus } from '../controllers/user.js';
import auth from '../middleware/auth.js'

const userRouter = Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
// userRouter.get('/', auth, getAll);
userRouter.get('/', getAll);
userRouter.patch('/updateStatus/:Id', updateStatus);
export default userRouter;