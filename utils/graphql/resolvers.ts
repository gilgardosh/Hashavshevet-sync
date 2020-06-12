import * as loader from "./loaders";
import * as hashavshevet from "./hashavshevetGetAll/hashavshevet";
import * as type from "./types/types";

function allRecords() {
  return hashavshevet.getAllRecords();
}

function recordById(args: type.QueryGetRecordByIdArgs) {
  return loader.recordById.load(args.id);
}

function recordsByTransactionId(transactionId) {
  return loader.recordsByTransactionId.load(transactionId);
}

function recordsByBatcnId(batchId) {
  return loader.recordsByBatcnId.load(batchId);
}

function allTransactions() {
  return hashavshevet.getAllTransactions();
}

function transactionById(args: type.QueryGetTransactionByIdArgs) {
  return loader.transactionById.load(args.id);
}

function transactionsByBatcnId(batchId) {
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
  //   (res) => {
  //     return {
  //       status: res.status
  //     }
  //   }
  // );
}

function allBatches() {
  return hashavshevet.getAllBatches();
}

function batchById(args: type.QueryGetBatchByIdArgs) {
  return loader.batchById.load(args.id);
}

function checkBatch(args: type.QueryCheckBatchArgs) {
  return hashavshevet.checkBatch({ batchNo: args.batchId });
}

function issueBatch(args: type.MutationIssueBatchArgs) {
  return hashavshevet.checkBatch({ batchNo: args.batchId });
}

function allAccounts() {
  return hashavshevet.getAllAccounts();
}

function accountById(args: type.QueryGetAccountByIdArgs) {
  return loader.accountById.load(args.id);
}

function allBankPageRecords() {
  return hashavshevet.getAllBankPageRecords();
}

function bankPageRecordById(args: type.QueryGetBankPageRecordByIdArgs) {
  return loader.bankPageRecordById.load(args.id);
}

function bankPageRecordsByBankPageId(args) {
  return loader.bankPageRecordsByBankPageId.load(args);
}

function allBankPages() {
  return hashavshevet.getAllBankPages();
}

function bankPageById(bankPageId: type.QueryGetBankPageByIdArgs) {
  return loader.bankPageById.load(bankPageId.id);
}

function postBankPage(args: type.MutationPostBankPageArgs) {
  return hashavshevet.importBankPageRecords({ rows: args.bankPageRecords });
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
  checkBatch,
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
