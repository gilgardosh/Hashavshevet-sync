import { exportDataRecords } from "../wizCloudFetch";
import * as dataFile from "./dataFiles";

function getAll(dataFile, parameters = []) {
  const data = {
    datafile: dataFile,
  };
  parameters.length ? (data["parameters"] = parameters) : "";
  return exportDataRecords(data);
}

async function getAllRecords() {
  let recordsList;
  await getAll(dataFile.records).then((data) => {
    recordsList = data["repdata"];
  });
  return recordsList;
}

async function getAllTransactions() {
  let transactionsList;
  await getAll(dataFile.transactions).then((data) => {
    transactionsList = data["repdata"];
  });
  return transactionsList;
}

async function getAllBatches() {
  let batchesList;
  await getAll(dataFile.batches).then((data) => {
    batchesList = data["repdata"];
  });
  const uniqueBatchesList = [];
  const map = new Map();
  for (const batch of batchesList) {
    if (!map.has(batch.id)) {
      map.set(batch.id, true);
      uniqueBatchesList.push(batch);
    }
  }
  return uniqueBatchesList;
}

async function getAllAccounts() {
  let accountsList;
  await getAll(dataFile.accounts).then((data) => {
    accountsList = data["repdata"];
  });
  return accountsList;
}

async function getAllBankPageRecords() {
  let bankPageRecordsList;
  await getAll(dataFile.bankPageRecords).then((data) => {
    bankPageRecordsList = data["repdata"];
  });
  return bankPageRecordsList;
}

async function getAllBankPages() {
  const uniqueBankPagesList = [];
  const map = new Map();
  for (const bankPage of await getAllBankPageRecords()) {
    if (!map.has(bankPage.bank_page_id)) {
      map.set(bankPage.bank_page_id, true);
      uniqueBankPagesList.push({ id: bankPage.bank_page_id });
    }
  }
  return uniqueBankPagesList;
}

export {
  getAllRecords,
  getAllTransactions,
  getAllBatches,
  getAllAccounts,
  getAllBankPageRecords,
  getAllBankPages,
};
