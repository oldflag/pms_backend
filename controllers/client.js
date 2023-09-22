import { createClient, getClients, updateClient, deleteClient, createClients } from '../lib/clients.js';
import tryCatch from './utils/tryCatch.js';

export const createOne = tryCatch(async (req, res) => {
  const { id, name, email, contactName, contactPhone, note, url, active} = req.body;
  const results = await createClient({ id, name, email, contactName, contactPhone, note, url, active})
  res.status(200).json({ success: true, result: results });
});

export const createMany = tryCatch(async (req, res) => {
  // const { id, name, contactName, contactEmail, contactPhone, note, url, active} = req.body;
  let results = await createClients(req.body)
  if(results.count > 0){
    results = await getClients()
  }
  res.status(200).json({ success: true, result: results });
});

export const getAll = tryCatch(async (req, res) => {
  const results = await getClients()
  res.status(200).json({ success: true, result: results });
});

export const updateStatus = tryCatch(async (req, res) => {
  await updateClient(req.params.Id, req.body);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});

export const deleteOne = tryCatch(async (req, res) => {
  await deleteClient(req.params.Id);
  res.status(200).json({ success: true, result: { id: req.params.Id } });
});
