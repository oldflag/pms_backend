import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/productItem.js';

const productItemRouter = Router();
productItemRouter.post('/register', createOne);
productItemRouter.post('/registerMany', createMany);
productItemRouter.get('/', getAll);
productItemRouter.patch('/updateStatus/:Id', updateStatus);
productItemRouter.delete('/:Id', deleteOne);
export default productItemRouter;