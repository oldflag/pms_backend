import { createProduct, getProducts, getProduct, updateProduct, deleteProduct, createProducts } from '../lib/products.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
 
  // const { id, name, part, productCategoryId, protocol, subprotocol, boxNum, orderingNum} = req.body;
  // const results = await createProduct({ id, name, part, productCategoryId, protocol, subprotocol, boxNum, orderingNum})
  // const { id, name, part, productCategoryId, protocol, subprotocol, boxNum, orderingNum} = req.body;
  try {
    const results = await createProduct(req.body)
    const aresult = await getProduct(results.id)
    res.status(200).json({ success: true, result: aresult });

  } catch (e) {
    console.log('There is something wrong : product.createOne')
    console.log(results)
    res.status(500).json({ success: false, result: e });
  }
});

export const createMany = tryCatch(async (req, res) => {
  let results = await createProducts(req.body)
  if(results.count > 0){
    results = await getProducts()
  }
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getProducts()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateProduct(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteProduct(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
