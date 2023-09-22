import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/client.js';

const clientRouter = Router();
clientRouter.post('/register', createOne);
clientRouter.post('/registerMany', createMany);
clientRouter.get('/', getAll);
clientRouter.patch('/updateStatus/:Id', updateStatus);
clientRouter.delete('/:Id', deleteOne);
export default clientRouter;