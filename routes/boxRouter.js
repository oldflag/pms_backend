import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/box.js';

const boxRouter = Router();
boxRouter.post('/register', createOne);
boxRouter.post('/registerMany', createMany);
boxRouter.get('/', getAll);
boxRouter.patch('/updateStatus/:Id', updateStatus);
boxRouter.delete('/:Id', deleteOne);
export default boxRouter;