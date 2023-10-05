import { Router } from 'express';
import { createOne, connectToBoxs, getAll, updateStatus, deleteOne, createMany } from '../controllers/product.js';

const productRouter = Router();
productRouter.post('/register', createOne);
productRouter.post('/connectBox', connectToBoxs);
productRouter.post('/registerMany', createMany);
productRouter.get('/', getAll);
productRouter.patch('/updateStatus/:Id', updateStatus);
productRouter.delete('/:Id', deleteOne);
export default productRouter;