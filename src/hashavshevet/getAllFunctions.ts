import { exportDataRecords } from './hashavshevet';
import * as bankPageSchemaFile from '../jsonSchemas/bankPageRecord.json';
import * as recordSchemaFile from '../jsonSchemas/record.json';
import * as dataFile from './dataFiles';
import { validateSchema } from '../utils/validator';
import { BankPageRecord, Record } from '../types';

function getAll(datafile: string, parameters = []) {
  const data = {
    datafile,
    parameters,
  };
  return exportDataRecords(data);
}

const getAllRecords = async (): Promise<Record[]> => {
  const data = await getAll(dataFile.records).then((res: { repdata: Record[] }) => res.repdata);
  const validation = await validateSchema(recordSchemaFile, data);
  if (!validation.isValid) throw new Error(validation.errors);
  return data;
};

const getAllTransactions = async () => {
  return await getAll(dataFile.transactions);
};

const getAllBatches = async () => {
  return await getAll(dataFile.batches);
};

const getAllAccounts = async () => {
  return await getAll(dataFile.accounts);
};

const getBankPageRecords = async (filters: BankPageRecordsFilters = {}): Promise<BankPageRecord[]> => {
  const data = await getAll(dataFile.bankPageRecords, [
    {
      p_name: '__MUSTACH_P0__',
      id: '0', // if you change this, parameter will be ignored
      type: 'long',
      name: 'betweenIDs',
      defVal: filters.minID || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P1__',
      id: '500', // if you change this, parameter will be ignored
      type: 'long',
      name: 'betweenIDs1',
      defVal: filters.maxID || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
  ]).then((res: { repdata: BankPageRecord[] }) => res.repdata);
  const validation = await validateSchema(bankPageSchemaFile, data);
  if (!validation.isValid) throw new Error(validation.errors);
  return data;
};

type BankPageRecordsFilters = { minID?: number; maxID?: number };

export { getAllRecords, getAllTransactions, getAllBatches, getAllAccounts, getBankPageRecords };
export * from './wizcloud/wizCloudFetch';
