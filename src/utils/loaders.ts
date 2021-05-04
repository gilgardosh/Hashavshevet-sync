import DataLoader from 'dataloader';
import * as resolver from './resolvers';

const recordById = new DataLoader(async (recordIds) => {
  const recordsList = await resolver.allRecords();
  return recordIds.map((id) => {
    return recordsList.find((record) => record.id === id);
  });
});

const recordsByTransactionId = new DataLoader(async (transactionIds) => {
  const recordsList = await resolver.allRecords();
  return transactionIds.map((id) => {
    return recordsList.filter((record) => record.transactionId === id);
  });
});

const recordsByBatcnId = new DataLoader(async (batchIds) => {
  const recordsList = await resolver.allRecords();
  return batchIds.map((id) => {
    return recordsList.filter((record) => record.batchId === id);
  });
});

const transactionById = new DataLoader(async (transacrionIds) => {
  const transactionsList = await resolver.allTransactions();
  return transacrionIds.map((id) => {
    return transactionsList.find((transaction) => transaction.id === id);
  });
});

const transactionsByBatcnId = new DataLoader(async (batchIds) => {
  const transactionsList = await resolver.allTransactions();
  return await batchIds.map((id) => {
    return transactionsList.filter((transaction) => transaction.batchId === id);
  });
});

const batchById = new DataLoader(async (batchIds) => {
  const batchesList = await resolver.allBatches();
  return batchIds.map((id) => {
    return batchesList.find((batch) => batch.id === id);
  });
});

const accountById = new DataLoader(async (accountIds) => {
  const accountsList = await resolver.allAccounts();
  return accountIds.map((id) => {
    return accountsList.find((account) => account.id === id);
  });
});

const bankPageRecordById = new DataLoader(async (bankPageRecordIds) => {
  const bankPageRecordsList = await resolver.allBankPageRecords();
  return bankPageRecordIds.map((id) => {
    return bankPageRecordsList.find((record) => record.id === id);
  });
});

const bankPageRecordsByBankPageId = new DataLoader(async (bankPageIds) => {
  const bankPageRecordsList = await resolver.allBankPageRecords();
  return bankPageIds.map((id) => {
    return bankPageRecordsList.filter((bankPageRecord) => bankPageRecord.bankPageId === id);
  });
});

const bankPageById = new DataLoader(async (bankPageIds) => {
  const bankPagesList = await resolver.allBankPages();
  return bankPageIds.map((id) => {
    return bankPagesList.find((page) => page.id === id);
  });
});

export {
  recordById,
  recordsByTransactionId,
  recordsByBatcnId,
  transactionById,
  transactionsByBatcnId,
  batchById,
  accountById,
  bankPageRecordById,
  bankPageRecordsByBankPageId,
  bankPageById,
};
