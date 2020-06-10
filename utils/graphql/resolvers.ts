import * as loader from "./loaders";
import {
  getAllRecords,
  getAllTransactions,
  getAllBatches,
  getAllAccounts,
  getAllBankPageRecords,
  getAllBankPages,
} from "./hashavshevetGetAll/getAllFunctions";

function allRecords() {
  return getAllRecords();
}

function recordById(recordId) {
  return loader.recordById.load(recordId);
}

function recordsByTransactionId(transactionId) {
  return loader.recordsByTransactionId.load(transactionId);
}

function recordsByBatcnId(batchId) {
  return loader.recordsByBatcnId.load(batchId);
}

function allTransactions() {
  return getAllTransactions()
}

function transactionById(transactionId) {
  return loader.transactionById.load(transactionId)
}

function transactionsByBatcnId(batchId) {
  return loader.transactionsByBatcnId.load(batchId);
}

function allBatches() {
  return getAllBatches();
}

function batchById(batchId) {
  return loader.batchById.load(batchId);
}

function allAccounts() {
  return getAllAccounts();
}

function accountById(accountId) {
  return loader.accountById.load(accountId);
}

function allBankPageRecords() {
  return getAllBankPageRecords();
}

function bankPageRecordById(bankPageRecordId) {
  return loader.bankPageRecordById.load(bankPageRecordId);
}

function bankPageRecordsByBankPageId(bankPageId) {
  return loader.bankPageRecordsByBankPageId.load(bankPageId);
}

function allBankPages() {
  return getAllBankPages();
}

function bankPageById(bankPageId) {
  return loader.bankPageById.load(bankPageId);
}

export {
  allRecords,
  recordById,
  recordsByTransactionId,
  recordsByBatcnId,
  allTransactions,
  transactionById,
  transactionsByBatcnId,
  allBatches,
  batchById,
  allAccounts,
  accountById,
  allBankPageRecords,
  bankPageRecordById,
  bankPageRecordsByBankPageId,
  allBankPages,
  bankPageById,
};
