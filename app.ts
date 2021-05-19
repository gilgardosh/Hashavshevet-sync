import app from '.';

const WIZ_KEY =
  '20e260c0b4150eda0927ca2742d19831f1ff6602c5c9965698247d2a0209ac35c58d0ce7f8344dd8a012cb137972a10e21c44874aa7ce9b1e3f8c889d727f7ab';
// const WIZ_COMPANY = 'wizdb1229n3';
const WIZ_COMPANY = 'wizdb1229n4'
const WIZ_URL = 'https://lb11.wizcloud.co.il/';


const testRun = async () => {
  const activated = await  app(WIZ_KEY, WIZ_COMPANY, WIZ_URL);

  // const ccc = await activated.getAllRecords()

  // const aaaa = await activated.getBankPageRecords();
  // console.log(aaaa);

  // const ddd = await activated.newBatch();

  // const bbbb = await activated.importBankPageRecords([{ AccountKey: '10001', SuF: 99, DatF: '10/05/2021', CreditDebit:  0}]);
  // console.log(bbbb);

  // const eee = await activated.napi();

  const fff = await activated.getAllBatches();
};

testRun();
