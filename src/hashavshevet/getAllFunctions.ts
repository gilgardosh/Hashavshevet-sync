import { exportDataRecords } from './hashavshevet';
import * as bankPageSchemaFile from '../jsonSchemas/bankPage.json';
import * as recordSchemaFile from '../jsonSchemas/record.json';
import * as dataFile from './dataFiles';
import { validateSchema } from '../utils/validator';

function getAll(datafile: string, parameters = []) {
  const data = {
    datafile,
    parameters: [],
  };
  if (parameters.length) data.parameters = parameters;
  return exportDataRecords(data);
}

async function getAllRecords() {
  const data = await getAll(dataFile.records);
  const { repdata } = data as { repdata: any[] };
  const validation = await validateSchema(recordSchemaFile, repdata);
  if (!validation.isValid) throw new Error(validation.errors);
  return data;
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
  const data = await getAll(dataFile.bankPageRecords);
  const { repdata } = data as { repdata: any[] };
  const validation = await validateSchema(bankPageSchemaFile, repdata);
  if (!validation.isValid) throw new Error(validation.errors);
  return data;
}

export { getAllRecords, getAllTransactions, getAllBatches, getAllAccounts, getAllBankPageRecords };
export * from './wizcloud/wizCloudFetch';
