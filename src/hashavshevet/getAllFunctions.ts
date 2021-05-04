import { exportDataRecords } from './hashavshevet';
import * as dataFile from './dataFiles';

function getAll(datafile: string, parameters = []) {
  const data = {
    datafile,
    parameters: [],
  };
  if (parameters.length) data.parameters = parameters;
  return exportDataRecords(data);
}

async function getAllRecords() {
  return await getAll(dataFile.records);
}

async function getAllTransactions() {
  return await getAll(dataFile.transactions);
}

async function getAllBatches() {
  return await getAll(dataFile.batches);
}

async function getAllAccounts() {
  return await getAll(dataFile.accounts);
}

async function getAllBankPageRecords() {
  return await getAll(dataFile.bankPageRecords);
}

export { getAllRecords, getAllTransactions, getAllBatches, getAllAccounts, getAllBankPageRecords };
export * from './wizcloud/wizCloudFetch';
