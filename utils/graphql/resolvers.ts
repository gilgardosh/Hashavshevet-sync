import * as loader from "./loaders";
import { getAllRecords } from "../wizcloudProccess/getAll/records";
import { getAllTransactions } from "../wizcloudProccess/getAll/transactions";
import { getAllBatches } from "../wizcloudProccess/getAll/batches";
import { getAllAccounts } from "../wizcloudProccess/getAll/accounts";
import { getAllBankPageRecords } from "../wizcloudProccess/getAll/bankPageRecords";
import { getAllBankPages } from "../wizcloudProccess/getAll/bankPages";

function allRecords() {
  return getAllRecords();
}

function recordById(record_id) {
  return loader.recordById.load(record_id);
}

function recordsByTransactionId(transaction_id) {
  return loader.recordsByTransactionId.load(transaction_id);
}

function recordsByBatcnId(batch_id) {
  return loader.recordsByBatcnId.load(batch_id);
}

function allTransactions() {
  return getAllTransactions();
}

function transactionById(transaction_id) {
  return loader.transactionById.load(transaction_id);
}

function transactionsByBatcnId(batch_id) {
  return loader.transactionsByBatcnId.load(batch_id);
}

function allBatches() {
  return getAllBatches();
}

function batchById(batch_id) {
  return loader.batchById.load(batch_id);
}

function allAccounts() {
  return getAllAccounts();
}

function accountById(account_id) {
  return loader.accountById.load(account_id);
}

function allBankPageRecords() {
  return getAllBankPageRecords();
}

function bankPageRecordById(bank_page_record_id) {
  return loader.bankPageRecordById.load(bank_page_record_id);
}

function bankPageRecordsByBankPageId(bank_page_id) {
  return loader.bankPageRecordsByBankPageId.load(bank_page_id);
}

function allBankPages() {
  return getAllBankPages();
}

function bankPageById(bank_page_id) {
  return loader.bankPageById.load(bank_page_id);
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
