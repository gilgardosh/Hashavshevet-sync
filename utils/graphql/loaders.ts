import DataLoader from "dataloader";
import { getAllRecords } from "../wizcloudProccess/getAll/records";
import { getAllTransactions } from "../wizcloudProccess/getAll/transactions";
import { getAllBatches } from "../wizcloudProccess/getAll/batches";
import { getAllAccounts } from "../wizcloudProccess/getAll/accounts";
import { getAllBankPageRecords } from "../wizcloudProccess/getAll/bankPageRecords";
import { getAllBankPages } from "../wizcloudProccess/getAll/bankPages";

const recordById = new DataLoader(async (recordIds) => {
  const recordsList = await getAllRecords();
  return recordIds.map((id) => {
    return recordsList.find((record) => record.id === id);
  });
});

const recordsByTransactionId = new DataLoader(async (transactionIds) => {
  const recordsList = await getAllRecords();
  return transactionIds.map((id) => {
    return recordsList.filter((record) => record.transaction_id === id);
  });
});

const recordsByBatcnId = new DataLoader(async (batchIds) => {
  const recordsList = await getAllRecords();
  return batchIds.map((id) => {
    return recordsList.filter((record) => record.batch_id === id);
  });
});

const transactionById = new DataLoader(async (transacrionIds) => {
  const transactionsList = await getAllTransactions();
  return transacrionIds.map((id) => {
    return transactionsList.find((transaction) => transaction.id === id);
  });
});

const transactionsByBatcnId = new DataLoader(async (batchIds) => {
  const transactionsList = await getAllTransactions();
  return await batchIds.map((id) => {
    return transactionsList.filter(
      (transaction) => transaction.batch_id === id
    );
  });
});

const batchById = new DataLoader(async (batchIds) => {
  const batchesList = await getAllBatches();
  return batchIds.map((id) => {
    return batchesList.find((batch) => batch.id === id);
  });
});

const accountById = new DataLoader(async (accountIds) => {
  const accountsList = await getAllAccounts();
  return accountIds.map((id) => {
    return accountsList.find((account) => account.id === id);
  });
});

const bankPageRecordById = new DataLoader(async (bankPageRecordIds) => {
  const bankPageRecordsList = await getAllBankPageRecords();
  return bankPageRecordIds.map((id) => {
    return bankPageRecordsList.find((record) => record.id === id);
  });
});

const bankPageRecordsByBankPageId = new DataLoader(async (bankPageIds) => {
  const bankPageRecordsList = await getAllBankPageRecords();
  return bankPageIds.map((id) => {
    return bankPageRecordsList.filter(
      (bankPageRecord) => bankPageRecord.bank_page_id === id
    );
  });
});

const bankPageById = new DataLoader(async (bankPageIds) => {
  const bankPagesList = await getAllBankPages();
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
