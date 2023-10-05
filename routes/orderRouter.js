import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/order.js';

const orderRouter = Router();
orderRouter.post('/register', createOne);
orderRouter.post('/registerMany', createMany);
orderRouter.get('/', getAll);
orderRouter.patch('/updateStatus/:Id', updateStatus);
orderRouter.delete('/:Id', deleteOne);
export default orderRouter;