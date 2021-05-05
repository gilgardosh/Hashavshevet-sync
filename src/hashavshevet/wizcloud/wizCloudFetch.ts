import { wizCloudAuth } from './wizCloudAuth';
import request from 'request';
import { ImportBankPageResponse } from '../../types';
import { validateSchema } from '../../utils/validator';
import * as bankPageResponseSchemaFile from '../../jsonSchemas/importBankPageResponse.json';

function wizCloudFetch(path, data = {}) {
  const wizUrl = process.env.WIZ_URL;

  const p = new Promise((resolve, reject) => {
    wizCloudAuth()
      .then(
        (token) => {
          const wizAuthToken = token;
          const url = `${wizUrl}${path}`;
          const options = {
            form: data,
            headers: {
              Authorization: `Bearer ${wizAuthToken}`,
            },
            method: 'POST',
            url,
          };
          request.post(options, (error, response) => {
            if (error) {
              console.log(error);
              reject(error);
            } else {
              resolve(JSON.parse(response.body));
            }
          });
        },
        (error) => {
          console.log('ERR12', error);
          throw new Error('auth error');
        },
      )
      .catch((e) => {
        console.log('ERR12', e);
        throw new Error('auth error');
      });
  });

  return p;
}

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
