import { Router } from 'express';
import { createOne, getAll, updateStatus, deleteOne, createMany } from '../controllers/productCategory.js';

const productCategoryRouter = Router();
productCategoryRouter.post('/register', createOne);
productCategoryRouter.post('/registerMany', createMany);
productCategoryRouter.get('/', getAll);
productCategoryRouter.patch('/updateStatus/:Id', updateStatus);
productCategoryRouter.delete('/:Id', deleteOne);
export default productCategoryRouter;