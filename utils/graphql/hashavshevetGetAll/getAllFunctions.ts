import { exportDataRecords } from "../../wizcloudProccess/wizCloudFetch";
import * as dataFile from "./dataFiles";
import * as type from "../types/types";

function getAll(datafile: string, parameters = []) {
  const data = {
    datafile,
    parameters: [],
  };
  if (parameters.length) data.parameters = parameters;
  return exportDataRecords(data);
}

async function getAllRecords() {
  let recordsList: type.Record[];
  await getAll(dataFile.records).then((data) => {
    recordsList = data["repdata"];
  });
  return recordsList;
}

async function getAllTransactions() {
  let transactionsList: type.Transaction[];
  await getAll(dataFile.transactions).then((data) => {
    transactionsList = data["repdata"];
  });
  return transactionsList;
}

async function getAllBatches() {
  let batchesList: type.Batch[];
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
  let accountsList: type.Account[];
  await getAll(dataFile.accounts).then((data) => {
    accountsList = data["repdata"];
  });
  return accountsList;
}

async function getAllBankPageRecords() {
  let bankPageRecordsList: type.BankPageRecord[];
  await getAll(dataFile.bankPageRecords).then((data) => {
    bankPageRecordsList = data["repdata"];
  });
  return bankPageRecordsList;
}

async function getAllBankPages() {
  const uniqueBankPagesList: type.BankPage[] = [];
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
