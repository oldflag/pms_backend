import { createBox, getBoxs, getBox, updateBox, deleteBox, createBoxs } from '../lib/boxs.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
 
  try {

    const results = await createBox(req.body)
    const aresult = await getBox(results.id)
    res.status(200).json({ success: true, result: aresult });

  } catch (e) {
    console.log('There is something wrong : box.createOne')
    console.log(results)
    res.status(500).json({ success: false, result: e });
  }
});

export const createMany = tryCatch(async (req, res) => {
  let results = await createBoxs(req.body)
  if(results.count > 0){
    results = await getBoxs()
  }
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getBoxs()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateBox(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteBox(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
