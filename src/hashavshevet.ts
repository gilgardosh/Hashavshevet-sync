import { getBankPageRecords, importBankPageRecords, getAllRecords } from './hashavshevet/hashavshevet';
import { wizCloudAuth } from './hashavshevet/wizcloud/wizCloudAuth';

export const app = async (wizPersonalToken: string, wizCompanyKey: string, wizUrl: string) => {
  process.env.WIZ_URL = wizUrl;

  try {
    process.env.WIZ_AUTH = (await wizCloudAuth(wizPersonalToken, wizCompanyKey, wizUrl)) as string;
  } catch (e) {
    console.log('ERR12', e);
    throw new Error('auth error');
  }

  return {
    getBankPageRecords,
    importBankPageRecords,
    getAllRecords,
  };
};
