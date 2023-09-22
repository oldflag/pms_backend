import { createItemCategory, getItemCategorys, getItemCategory, updateItemCategory, deleteItemCategory, createItemCategorys } from '../lib/itemCategorys.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
 
  // const { id, name, part, productCategoryId, protocol, subprotocol, boxNum, orderingNum} = req.body;
  // const results = await createItemCategory({ id, name, part, productCategoryId, protocol, subprotocol, boxNum, orderingNum})
  // const { id, name, part, productCategoryId, protocol, subprotocol, boxNum, orderingNum} = req.body;
  try {

    const results = await createItemCategory(req.body)
    const aresult = await getItemCategory(results.id)
    res.status(200).json({ success: true, result: aresult });

  } catch (e) {
    console.log('There is something wrong : itemCategory.createOne')
    console.log(results)
    res.status(500).json({ success: false, result: e });
  }
});

export const createMany = tryCatch(async (req, res) => {
  let results = await createItemCategorys(req.body)
  if(results.count > 0){
    results = await getItemCategorys()
  }
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getItemCategorys()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateItemCategory(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteItemCategory(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
