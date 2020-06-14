import * as loader from "./loaders";
import * as hashavshevet from "./hashavshevet/hashavshevet";
import * as type from "./types/types";

function allRecords() {
  return hashavshevet.getAllRecords();
}

function recordById(id: number) {
  return loader.recordById.load(id);
}

function recordsByTransactionId(transactionId: number) {
  return loader.recordsByTransactionId.load(transactionId);
}

function recordsByBatcnId(batchId: number) {
  return loader.recordsByBatcnId.load(batchId);
}

function allTransactions() {
  return hashavshevet.getAllTransactions();
}

function transactionById(id: number) {
  return loader.transactionById.load(id);
}

function transactionsByBatcnId(batchId: number) {
  return loader.transactionsByBatcnId.load(batchId);
}

function postTransactionsToBatch(
  args: type.MutationPostTransactionsToBatchArgs
) {
  // maping request to hashavshevet key names
  const rows = args.transactionsList.map((t) => {
    let moves = [];
    if (t.records) {
      moves = t.records.map((r) => ({
        AccountKey: r.accountId,
        DebitCredit: r.debitOrCreditNumber,
        SuF: r.shekelSum,
        SuFDlr: r.foreignCurrencySum,
      }));
    }
    return {
      Branch: t.branch,
      CostCode: t.costingCode,
      CredName: t.creditorName,
      CurrencyCode: t.currencyCode,
      DatF3: t.date3,
      DebName: t.debtorName,
      Description: t.description,
      Det2: t.details2,
      Details: t.details1,
      DueDate: t.dueDate,
      Osek874: t.authorizedDealerNumber,
      Quant: t.quantity,
      Ref2: t.reference2,
      Ref3: t.reference3,
      Referance: t.reference1,
      SuF: t.shekelSum,
      SuFDlr: t.foreignCurrencySum,
      TransCredID: t.creditorId,
      TransDebID: t.debtorId,
      TransType: t.type,
      ValueDate: t.valueDate,
      moves: moves,
    };
  });
  // hashavshevet API call
  return hashavshevet.addTransactionsToBatch({
    batchNo: args.batchId,
    insertolastb: args.insertToLastBatch,
    check: args.checkBatch,
    issue: args.issueBatch,
    rows: rows,
  });
  // maping response to local key names
  // .then(
  // );
}

function allBatches() {
  return hashavshevet.getAllBatches();
}

function batchById(id: number) {
  return loader.batchById.load(id);
}

function checkBatchById(id: number) {
  return hashavshevet.checkBatch({ batchNo: id });
}

function issueBatch(id: number) {
  return hashavshevet.checkBatch({ batchNo: id });
}

function allAccounts() {
  return hashavshevet.getAllAccounts();
}

function accountById(id: number) {
  return loader.accountById.load(id);
}

function allBankPageRecords() {
  return hashavshevet.getAllBankPageRecords();
}

function bankPageRecordById(id: number) {
  return loader.bankPageRecordById.load(id);
}

function bankPageRecordsByBankPageId(id: number) {
  return loader.bankPageRecordsByBankPageId.load(id);
}

function allBankPages() {
  return hashavshevet.getAllBankPages();
}

function bankPageById(id: number) {
  return loader.bankPageById.load(id);
}

function postBankPage(args: type.MutationPostBankPageArgs) {
    // maping request to hashavshevet key names
    const rowsData = args.bankPageRecords.map((r) => {
      return {
        AccountKey: r.accountId,
        Reference: r.reference,
        CreditDebit: r.creditOrDebit,
        SuF: r.shekelSum,
        Details: r.details,
        DatF: r.date,
      };
    });
    // hashavshevet API call
    return hashavshevet.importBankPageRecords({
      rows: rowsData,
    });
    // maping response to local key names
    // .then(
    // );
}

export {
  allRecords,
  recordById,
  recordsByTransactionId,
  recordsByBatcnId,
  allTransactions,
  transactionById,
  transactionsByBatcnId,
  postTransactionsToBatch,
  allBatches,
  batchById,
  checkBatchById,
  issueBatch,
  allAccounts,
  accountById,
  allBankPageRecords,
  bankPageRecordById,
  bankPageRecordsByBankPageId,
  allBankPages,
  bankPageById,
  postBankPage,
};
