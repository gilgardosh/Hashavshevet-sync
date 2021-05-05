import { getBankPageRecords, importBankPageRecords } from './hashavshevet/hashavshevet';

export const app = (wizPersonalToken: string, wizCompanyKey: string, wizUrl: string) => {
  process.env.WIZ_KEY = wizPersonalToken;
  process.env.WIZ_COMPANY = wizCompanyKey;
  process.env.WIZ_URL = wizUrl;

  return {
    getBankPageRecords,
    importBankPageRecords,
  };
};
