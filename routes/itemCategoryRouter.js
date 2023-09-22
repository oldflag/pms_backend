import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/itemCategory.js';

const itemCategoryRouter = Router();
itemCategoryRouter.post('/register', createOne);
itemCategoryRouter.post('/registerMany', createMany);
itemCategoryRouter.get('/', getAll);
itemCategoryRouter.patch('/updateStatus/:Id', updateStatus);
itemCategoryRouter.delete('/:Id', deleteOne);
export default itemCategoryRouter;