import { createOrder, getOrders, getOrder, updateOrder, deleteOrder, createOrders } from '../lib/orders.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  try {
    const results = await createOrder(req.body)
    const aresult = await getOrder(results.id)
    res.status(200).json({ success: true, result: aresult });

  } catch (e) {
    console.log('There is something wrong : order.createOne')
    console.log(results)
    res.status(500).json({ success: false, result: e });
  }
});

export const createMany = tryCatch(async (req, res) => {
  // const { id, name, contactName, contactEmail, contactPhone, note, url, active} = req.body;
  let results = await createOrders(req.body)
  if(results.count > 0){
    results = await getOrders()
  }
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getOrders()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateOrder(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteOrder(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
