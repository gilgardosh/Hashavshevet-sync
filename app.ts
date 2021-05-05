import { config } from 'dotenv';
import { getBankPageRecords } from './src/hashavshevet/hashavshevet';

config();

const wizPersonalToken = process.env.DEP_WIZ_KEY;
const wizCompanyKey = process.env.DEP_WIZ_COMPANY;
const wizUrl = process.env.DEP_WIZ_URL;

const test = async (wizPersonalToken: string, wizCompanyKey: string, wizUrl: string) => {
  process.env.WIZ_KEY = wizPersonalToken;
  process.env.WIZ_COMPANY = wizCompanyKey;
  process.env.WIZ_URL = wizUrl;

  const data = await getBankPageRecords({ minID: 5, maxID: 10 });
  console.log(data);
};

test(wizPersonalToken, wizCompanyKey, wizUrl);
