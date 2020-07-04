import * as loader from './loaders';
import * as hashavshevet from '../hashavshevet/hashavshevet';
import * as type from '../types/types';

function allRecords() {
    return (
        hashavshevet
            .getAllRecords()
            .then((d: { repdata: any[] }) => d.repdata)
            // TODO: temorary until datafiles update
            .then((recordsListRaw) => {
                const recordsList: type.Record[] = [];
                for (const r of recordsListRaw) {
                    recordsList.push({
                        debitOrCredit: r.debit_or_credit,
                        counterAccountId: r.counter_account_id,
                        matchNumberCardAnalysis: r.match_number_card_analysis,
                        debitOrCreditNumber: r.debit_or_credit_number,
                        id: r.id,
                        accountId: r.account_id,
                        counterAccountName: r.counter_account_name,
                        shekelCredit: r.shekel_credit,
                        shekelDebit: r.shekel_debit,
                        shekelSum: r.shekel_sum,
                        shekelSumClosedInRecord: r.shekel_sum_closed_in_record,
                        shekelSumOpenInRecord: r.shekel_sum_open_in_record,
                        cumulativeBalance: r.cumulative_balance,
                        foreignCurrencyCumulativeBalanceWithoutOpeningBalance:
                            r.foreign_currency_cumulative_balance_without_opening_balance,
                        cumulativeBalanceWithoutOpeningBalance: r.cumulative_balance_without_opening_balance,
                        shekelCumulativeBalanceByFilter: r.cumulative_balance_by_sector,
                        cumulativeBalanceBySortKey: r.cumulative_balance_by_sort_key,
                        cumulativeBalanceOfOpenSumInRecord: r.cumulative_balance_of_open_sum_in_record,
                        foreignCurrencyCredit: r.foreign_currency_credit,
                        foreignCurrencyDebit: r.foreign_currency_debit,
                        foreignCurrencyCumulativeBalance: r.foreign_currency_cumulative_balance,
                        foreignCurrencySum: r.foreign_currency_sum,
                        foreignCurrencySumClosedInRecord: r.foreign_currency_sum_closed_in_record,
                        foreignCurrencySumOpenInRecord: r.foreign_currency_sun_open_in_record,
                        estimatedSum: r.estimated_sum,
                        transactionId: r.transaction_id,
                        batchId: r.batch_id,
                    });
                }
                return recordsList;
            })
            // end of temporary
            .then((recordsList: type.Record[]) => {
                return recordsList;
            })
    );
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
    return (
        hashavshevet
            .getAllTransactions()
            .then((d: { repdata: any[] }) => d.repdata)
            // TODO: temorary until datafiles update
            .then((transactionsListRaw) => {
                const transactionsList: type.Transaction[] = [];
                for (const t of transactionsListRaw) {
                    transactionsList.push({
                        debtorId: t.creditor_id,
                        creditorId: t.debtor_id,
                        type: t.type,
                        currencyCode: t.currency_code,
                        foreignCurrencySum: t.foreign_currency_sum,
                        shekelSum: t.shekel_sum,
                        reference1: t.reference1,
                        reference2: t.reference2,
                        reference3: t.reference3,
                        valueDate: t.value_date,
                        dueDate: t.due_date,
                        details1: t.details1,
                        details2: t.details2,
                        exchangeRateDifferences: t.exchange_rate_differences,
                        costingCodeFilter: t.costing_code_sector,
                        quantity: t.quantity,
                        inventoryId: t.inventory_id,
                        chequeId: t.cheque_id,
                        id: t.id,
                        batchId: t.batch_id,
                        authorizedDealerNumber: t.authorized_dealer_number,
                        registerNumber: t.register_number,
                        stornoCancelledTransactionId: t.storno_cancelled_transaction_id,
                        branch: t.branch,
                        description: t.description,
                        linkedFile: t.linked_file,
                        costingCode: t.costing_code,
                        username: t.username,
                        branchName: t.branch_name,
                        costingCodeName: t.costing_code_name,
                        date3: t.date3,
                    });
                }
                return transactionsList;
            })
            // end of temporary
            .then((transactionsList: type.Transaction[]) => {
                return transactionsList;
            })
    );
}

function transactionById(id: number) {
    return loader.transactionById.load(id);
}

function transactionsByBatcnId(batchId: number) {
    return loader.transactionsByBatcnId.load(batchId);
}

function postTransactionsToBatch(args: type.MutationPostTransactionsToBatchArgs) {
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
            moves,
        };
    });
    // hashavshevet API call
    return hashavshevet.addTransactionsToBatch({
        batchNo: args.batchId,
        insertolastb: args.insertToLastBatch,
        check: args.checkBatch,
        issue: args.issueBatch,
        rows,
    });
    // maping response to local key names
    // .then(
    // );
}

function allBatches() {
    return (
        hashavshevet
            .getAllBatches()
            .then((d: { repdata: any[] }) => d.repdata)
            // TODO: temorary until datafiles update
            .then((batchesListRaw) => {
                const batchesList: type.Batch[] = [];
                for (const b of batchesListRaw) {
                    batchesList.push({
                        id: b.id,
                        type: b.type,
                        status: b.status,
                        issueDate: b.issue_date,
                        details: b.details,
                        initTime: b.init_time,
                        initDate: b.init_date,
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
            })
    );
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
    return (
        hashavshevet
            .getAllAccounts()
            .then((d: { repdata: any[] }) => d.repdata)
            // TODO: temorary until datafiles update
            .then((accountsListRaw) => {
                const accountsList: type.Account[] = [];
                for (const a of accountsListRaw) {
                    accountsList.push({
                        id: a.id,
                        name: a.name,
                        sortGroup: a.sort_group,
                        filter: a.sector,
                        details: a.details,
                        initDate: a.init_date,
                        type: a.type,
                        isActive: a.is_active,
                        address: a.address,
                        city: a.city,
                        zipcode: a.zipcode,
                        country: a.country,
                        phone: a.phone,
                        cellphone: a.cellphone,
                        fax: a.fax,
                        email: a.email,
                        balanceCode: a.balance_code,
                        generalDiscountPercent: a.general_discount_percent,
                        vatExempt: a.vat_exempt,
                        occupation: a.occupation,
                        agent: a.agent,
                        withholdingPercent: a.withholding_percent,
                        withholdingValidity: a.withholding_validity,
                        bankId: a.bank_id,
                        bankBranchId: a.bank_branch_id,
                        bankAccountId: a.bank_account_id,
                        authorizedDealerNumber: a.authorized_dealer_number,
                        mainAccount: a.main_account,
                        maxCredit: a.max_credit,
                        maxCreditCurrency: a.max_credit_currency,
                        maxObligo: a.max_obligo,
                        maxObligoCurrency: a.max_obligo_currency,
                        incomeFileNumber: a.income_file_number,
                        centralAccount: a.central_account,
                        accountantTransfer: a.accountant_transfer,
                        costingCode: a.costing_code,
                    });
                }
                return accountsList;
            })
            // end of temporary
            .then((accountsList: type.Account[]) => {
                return accountsList;
            })
    );
}

function accountById(id: number) {
    return loader.accountById.load(id);
}

function allBankPageRecords() {
    return (
        hashavshevet
            .getAllBankPageRecords()
            .then((d: { repdata: any[] }) => d.repdata)
            // TODO: temorary until datafiles update
            .then((bankPageRecordsListRaw) => {
                const bankPageRecordsList: type.BankPageRecord[] = [];
                for (const r of bankPageRecordsListRaw) {
                    bankPageRecordsList.push({
                        id: r.id,
                        bankPageId: r.bank_page_id,
                        reference: r.reference,
                        debitOrCredit: r.debit_or_credit,
                        cumulativeBalance: r.cumulative_balance,
                        cumulativeBalanceCalculated: r.cumulative_balance_calculated,
                        matchNumber: r.match_number,
                        accountId: r.account_id,
                        sum: r.sum,
                        details: r.details,
                        accountName: r.account_name,
                        date: r.date,
                        adjustedRecord: r.adjusted_record,
                    });
                }
                return bankPageRecordsList;
            })
            // end of temporary
            .then((bankPageRecordsList: type.BankPageRecord[]) => {
                return bankPageRecordsList;
            })
    );
}

function bankPageRecordById(id: number) {
    return loader.bankPageRecordById.load(id);
}

function bankPageRecordsByBankPageId(id: number) {
    return loader.bankPageRecordsByBankPageId.load(id);
}

async function allBankPages() {
    const uniqueBankPagesList: type.BankPage[] = [];
    const map = new Map();
    for (const bankPage of await allBankPageRecords()) {
        if (!map.has(bankPage.bankPageId)) {
            map.set(bankPage.bankPageId, true);
            uniqueBankPagesList.push({ id: bankPage.bankPageId });
        }
    }
    return uniqueBankPagesList;
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
            SuF: r.sum,
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

async function userCompanies() {
    return await hashavshevet
        .getCompanies()
        .then((d: { repdata: any[] }) => d.repdata)
        // TODO: temorary until datafiles update
        .then((companyListRaw) => {
            const companyList = [];
            for (const c of companyListRaw) {
                companyList.push({
                    companyFileName: c.Company_File_Name,
                    companyName: c.Company_Name,
                    compVatnum: c.Comp_Vatnum,
                });
            }
            return companyList;
        })
        // end of temporary
        .then((companyList) => {
            return companyList;
        });
}

async function userDetails() {
    return await hashavshevet.napi().then((data: { session: unknown }) => {
        return data.session;
    });
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
    userCompanies,
    userDetails,
};
