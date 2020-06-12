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
  return await getAll(dataFile.records)
    .then((d: { repdata: any[] }) => d.repdata)
    // TODO: temorary until datafiles update
    .then((records_list) => {
      let recordsList: type.Record[] = [];
      for (let r of records_list) {
        recordsList.push({
          debitOrCredit: r["debit_or_credit"],
          counterAccountId: r["counter_account_id"],
          matchNumberCardAnalysis: r["match_number_card_analysis"],
          debitOrCreditNumber: r["debit_or_credit_number"],
          id: r["id"],
          accountId: r["account_id"],
          counterAccountName: r["counter_account_name"],
          shekelCredit: r["shekel_credit"],
          shekelDebit: r["shekel_debit"],
          shekelSum: r["shekel_sum"],
          shekelSumClosedInRecord: r["shekel_sum_closed_in_record"],
          shekelSumOpenInRecord: r["shekel_sum_open_in_record"],
          cumulativeBalance: r["cumulative_balance"],
          foreignCurrencyCumulativeBalanceWithoutOpeningBalance:
            r["foreign_currency_cumulative_balance_without_opening_balance"],
          cumulativeBalanceWithoutOpeningBalance:
            r["cumulative_balance_without_opening_balance"],
          shekelCumulativeBalanceBySector: r["cumulative_balance_by_sector"],
          cumulativeBalanceBySortKey: r["cumulative_balance_by_sort_key"],
          cumulativeBalanceOfOpenSumInRecord:
            r["cumulative_balance_of_open_sum_in_record"],
          foreignCurrencyCredit: r["foreign_currency_credit"],
          foreignCurrencyDebit: r["foreign_currency_debit"],
          foreignCurrencyCumulativeBalance:
            r["foreign_currency_cumulative_balance"],
          foreignCurrencySum: r["foreign_currency_sum"],
          foreignCurrencySumClosedInRecord:
            r["foreign_currency_sum_closed_in_record"],
          foreignCurrencySunOpenInRecord:
            r["foreign_currency_sun_open_in_record"],
          estimatedSum: r["estimated_sum"],
          transactionId: r["transaction_id"],
          batchId: r["batch_id"],
        });
      }
      return recordsList;
    })
    // end of temporary
    .then((recordsList: type.Record[]) => {
      return recordsList;
    });
}

async function getAllTransactions() {
  return await getAll(dataFile.transactions)
  .then((d: { repdata: any[] }) => d.repdata)
  // TODO: temorary until datafiles update
  .then((transactions_list) => {
    let transactionsList: type.Transaction[] = [];
    for (let t of transactions_list) {
      transactionsList.push({
        debtorId: t["creditor_id"],
        creditorId: t["debtor_id"],
        type: t["type"],
        currencyCode: t["currency_code"],
        foreignCurrencySum: t["foreign_currency_sum"],
        shekelSum: t["shekel_sum"],
        reference1: t["reference1"],
        reference2: t["reference2"],
        reference3: t["reference3"],
        valueDate: t["value_date"],
        dueDate: t["due_date"],
        details1: t["details1"],
        details2: t["details2"],
        exchangeRateDifferences: t["exchange_rate_differences"],
        costingCodeSector: t["costing_code_sector"],
        quantity: t["quantity"],
        inventoryId: t["inventory_id"],
        chequeId: t["cheque_id"],
        id: t["id"],
        batchId: t["batch_id"],
        authorizedDealerNumber: t["authorized_dealer_number"],
        registerNumber: t["register_number"],
        stornoCancelledTransactionId: t["storno_cancelled_transaction_id"],
        branch: t["branch"],
        description: t["description"],
        linkedFile: t["linked_file"],
        costingCode: t["costing_code"],
        username: t["username"],
        branchName: t["branch_name"],
        costingCodeName: t["costing_code_name"],
        date3: t["date3"],
      });
    }
    return transactionsList;
  })
  // end of temporary
  .then((transactionsList: type.Transaction[]) => {
    return transactionsList;
  });
}

async function getAllBatches() {
  return await getAll(dataFile.batches)
  .then((d: { repdata: any[] }) => d.repdata)
  // TODO: temorary until datafiles update
  .then((batches_list) => {
    let batchesList: type.Batch[] = [];
    for (let b of batches_list) {
      batchesList.push({
        id: b["id"],
        type: b["type"],
        status: b["status"],
        issueDate: b["issue_date"],
        details: b["details"],
        initTime: b["init_time"],
        initDate: b["init_date"],
      });
    }
    return batchesList;
  })
  // end of temporary
  .then((batchesList: type.Batch[]) => {
    const uniqueBatchesList: type.Batch[] = [];
    const map = new Map();
    for (const batch of batchesList) {
      if (!map.has(batch.id)) {
        map.set(batch.id, true);
        uniqueBatchesList.push(batch);
      }
    }
    return uniqueBatchesList;
  });
}

async function getAllAccounts() {
  return await getAll(dataFile.accounts)
  .then((d: { repdata: any[] }) => d.repdata)
  // TODO: temorary until datafiles update
  .then((accounts_list) => {
    let accountsList: type.Account[] = [];
    for (let a of accounts_list) {
      accountsList.push({
        id: a["id"],
        name: a["name"],
        sortGroup: a["sort_group"],
        sector: a["sector"],
        details: a["details"],
        initDate: a["init_date"],
        type: a["type"],
        isActive: a["is_active"],
        address: a["address"],
        city: a["city"],
        zipcode: a["zipcode"],
        country: a["country"],
        phone: a["phone"],
        cellphone: a["cellphone"],
        fax: a["fax"],
        email: a["email"],
        balanceCode: a["balance_code"],
        generalDiscountPercent: a["general_discount_percent"],
        vatExempt: a["vat_exempt"],
        occupation: a["occupation"],
        agent: a["agent"],
        withholdingPercent: a["withholding_percent"],
        withholdingValidity: a["withholding_validity"],
        bankId: a["bank_id"],
        bankBranchId: a["bank_branch_id"],
        bankAccountId: a["bank_account_id"],
        authorizedDealerNumber: a["authorized_dealer_number"],
        mainAccount: a["main_account"],
        maxCredit: a["max_credit"],
        maxCreditCurrency: a["max_credit_currency"],
        maxObligo: a["max_obligo"],
        maxObligoCurrency: a["max_obligo_currency"],
        incomeFileNumber: a["income_file_number"],
        centralAccount: a["central_account"],
        accountantTransfer: a["accountant_transfer"],
        costingCode: a["costing_code"],
      });
    }
    return accountsList;
  })
  // end of temporary
  .then((accountsList: type.Account[]) => {
    return accountsList;
  });
}

async function getAllBankPageRecords() {
  return await getAll(dataFile.bankPageRecords)
  .then((d: { repdata: any[] }) => d.repdata)
  // TODO: temorary until datafiles update
  .then((bank_page_records_list) => {
    let bankPageRecordsList: type.BankPageRecord[] = [];
    for (let r of bank_page_records_list) {
      bankPageRecordsList.push({
        id: r["id"],
        bankPageId: r["bank_page_id"],
        reference: r["reference"],
        debitOrCredit: r["debit_or_credit"],
        cumulativeBalance: r["cumulative_balance"],
        cumulativeBalanceCalculated: r["cumulative_balance_calculated"],
        matchNumber: r["match_number"],
        accountId: r["account_id"],
        sum: r["sum"],
        details: r["details"],
        accountName: r["account_name"],
        date: r["date"],
        adjustedRecord: r["adjusted_record"],
      });
    }
    return bankPageRecordsList;
  })
  // end of temporary
  .then((bankPageRecordsList: type.BankPageRecord[]) => {
    return bankPageRecordsList;
  });
}

async function getAllBankPages() {
  const uniqueBankPagesList: type.BankPage[] = [];
  const map = new Map();
  for (const bankPage of await getAllBankPageRecords()) {
    if (!map.has(bankPage.bankPageId)) {
      map.set(bankPage.bankPageId, true);
      uniqueBankPagesList.push({ id: bankPage.bankPageId });
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
export * from "../../wizcloudProccess/wizCloudFetch"
