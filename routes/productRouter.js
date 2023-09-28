import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/product.js';

const productRouter = Router();
productRouter.post('/register', createOne);
productRouter.post('/registerMany', createMany);
productRouter.get('/', getAll);
productRouter.patch('/updateStatus/:Id', updateStatus);
productRouter.delete('/:Id', deleteOne);
export default productRouter;