import { createProductItem, getProductItems, getProductItem, updateProductItem, deleteProductItem, createProductItems } from '../lib/productItems.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
 
  try {

    const results = await createProductItem(req.body)
    const aresult = await getProductItem(results.id)
    res.status(200).json({ success: true, result: aresult });

  } catch (e) {
    console.log('There is something wrong : productItem.createOne')
    console.log(results)
    res.status(500).json({ success: false, result: e });
  }
});

export const createMany = tryCatch(async (req, res) => {
  let results = await createProductItems(req.body)
  if(results.count > 0){
    results = await getProductItems()
  }
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getProductItems()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateProductItem(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteProductItem(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
