import { createProductCategory, getProductCategorys, updateProductCategory, deleteProductCategory, createProductCategorys } from '../lib/productCategorys.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, description, type} = req.body;
  const results = await createProductCategory({ id, name, description, type})
  // const results = await createProductCategory(req.body)
  res.status(200).json({ success: true, result: results });
});

export const createMany = tryCatch(async (req, res) => {
  // const { id, name, contactName, contactEmail, contactPhone, note, url, active} = req.body;
  let results = await createProductCategorys(req.body)
  if(results.count > 0){
    results = await getProductCategorys()
  }
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getProductCategorys()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateProductCategory(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteProductCategory(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
