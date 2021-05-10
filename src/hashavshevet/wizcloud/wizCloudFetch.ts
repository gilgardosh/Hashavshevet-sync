import { ImportBankPageResponse } from '../../types';
import { validateSchema } from '../../utils/validator';
import * as bankPageResponseSchemaFile from '../../jsonSchemas/importBankPageResponse.json';
import fetch from 'node-fetch';
import QueryString from 'qs';

const wizCloudFetch = async (path, data = {}) => {
  const authToken = process.env.WIZ_AUTH;
  const wizUrl = process.env.WIZ_URL;
  const url = `${wizUrl}${path}`;

  const cleanUrl = (url: string) => {
    return url.replace('https://', '').replace('http://', '').replace('/', '');
  };

  let options = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    host: cleanUrl(wizUrl),
  };

  options.headers['host'] = cleanUrl(wizUrl);
  options['body'] = QueryString.stringify(data);
  return await fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((e) => {
      console.log(e);
      throw new Error('request error');
    });
};

export const napi = () => {
  return wizCloudFetch('api/napi');
};
// jurnal
export const addTransactionsToBatch = (data) => {
  return wizCloudFetch('jtransApi/tmpBatch', data);
};
export const checkBatch = (data) => {
  return wizCloudFetch('jtransApi/chkBatch', data);
};
export const newBatch = () => {
  return wizCloudFetch('jtransApi/newBatch');
};
export const issueBatch = (data) => {
  return wizCloudFetch('jtransApi/issueBatch', data);
};
// index
export const importIndexRecords = (data) => {
  return wizCloudFetch('IndexApi/importIndex', data);
};
export const deleteIndexRecords = (data) => {
  return wizCloudFetch('IndexApi/deleteIndex', data);
};
// bankpages
export const importBankPageRecords = async (records: BankPageImportType[]): Promise<ImportBankPageResponse> => {
  const data = await wizCloudFetch('BankPagesApi/importBankPage', { rows: records });
  const validation = await validateSchema(bankPageResponseSchemaFile, data);
  return data as ImportBankPageResponse;
};
// data export
export const exportDataRecords = (data) => {
  return wizCloudFetch('ExportDataApi/exportData', data);
};
// inv documents
export const createDocument = (data) => {
  return wizCloudFetch('invApi/createDoc', data);
};
export const showDocument = (data) => {
  return wizCloudFetch('invApi/getDoc', data);
};
export const delDocument = (data) => {
  return wizCloudFetch('invApi/delDocument', data);
};
export const issueDoc = (data) => {
  return wizCloudFetch('invApi/issueDocument', data);
};
// crm
export const crmActivities = (data) => {
  return wizCloudFetch('crmActivitiesApi/createSchema', data);
};
export const crmActivitiesTest = (data) => {
  return wizCloudFetch('crmActivitiesTest/createSchema', data);
};
// companies list
export const getCompanies = () => {
  return wizCloudFetch('CompanyListToTokenApi/TokenCompanies');
};

type BankPageImportType = {
  AccountKey: string;
  Reference?: number; // TODO: integer
  CreditDebit: 1 | 0;
  SuF: number;
  Details?: string;
  DatF: string;
};
