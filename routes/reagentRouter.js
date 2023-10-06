import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/reagent.js';

const reagentRouter = Router();
reagentRouter.post('/register', createOne);
reagentRouter.post('/registerMany', createMany);
reagentRouter.get('/', getAll);
reagentRouter.patch('/updateStatus/:Id', updateStatus);
reagentRouter.delete('/:Id', deleteOne);
export default reagentRouter;