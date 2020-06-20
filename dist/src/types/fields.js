"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const accountId = {
    type: graphql_1.GraphQLString,
    description: "Account identifier",
};
exports.accountId = accountId;
const accountName = {
    type: graphql_1.GraphQLString,
    description: "Account name (max 50 characters)",
};
exports.accountName = accountName;
const accountantTransfer = {
    type: graphql_1.GraphQLString,
    description: "",
};
exports.accountantTransfer = accountantTransfer;
const accountType = {
    type: graphql_1.GraphQLString,
    description: "Type of account",
};
exports.accountType = accountType;
const address = {
    type: graphql_1.GraphQLString,
    description: "Address (max 50 characters)",
};
exports.address = address;
const adjustedRecord = {
    type: graphql_1.GraphQLString,
    description: "Adjusted record",
};
exports.adjustedRecord = adjustedRecord;
const agent = {
    type: graphql_1.GraphQLInt,
    description: "Salesperson",
};
exports.agent = agent;
const authorizedDealerNumber = {
    type: graphql_1.GraphQLString,
    description: "VAT registration number (max [20 or 9?] characters)",
};
exports.authorizedDealerNumber = authorizedDealerNumber;
const bankPageId = {
    type: graphql_1.GraphQLInt,
    description: "Bank page identifier",
};
exports.bankPageId = bankPageId;
const balanceCode = {
    type: graphql_1.GraphQLString,
    description: "Code for the balance and profit and loss report",
};
exports.balanceCode = balanceCode;
const bankAccountId = {
    type: graphql_1.GraphQLString,
    description: "Bank account # (max 20 characters)",
};
exports.bankAccountId = bankAccountId;
const bankBranchId = {
    type: graphql_1.GraphQLString,
    description: "Bank branch code (max 5 characters)",
};
exports.bankBranchId = bankBranchId;
const bankId = {
    type: graphql_1.GraphQLString,
    description: "Bank code (max 3 characters)",
};
exports.bankId = bankId;
const bankPageRecordId = {
    type: graphql_1.GraphQLInt,
    description: "Bank page record identifier",
};
exports.bankPageRecordId = bankPageRecordId;
const batchType = {
    type: graphql_1.GraphQLString,
    description: "Type",
};
exports.batchType = batchType;
const branch = {
    type: graphql_1.GraphQLInt,
    description: "Branch",
};
exports.branch = branch;
const branchName = {
    type: graphql_1.GraphQLString,
    description: "Branch Name",
};
exports.branchName = branchName;
const chequeId = {
    type: graphql_1.GraphQLInt,
    description: "Cheque Identifier",
};
exports.chequeId = chequeId;
const centralAccount = {
    type: graphql_1.GraphQLString,
    description: "",
};
exports.centralAccount = centralAccount;
const cellphone = {
    type: graphql_1.GraphQLString,
    description: "Callphone",
};
exports.cellphone = cellphone;
const city = {
    type: graphql_1.GraphQLString,
    description: "City (max 20 characters)",
};
exports.city = city;
const costingCode = {
    type: graphql_1.GraphQLString,
    description: "Code of cost center (existing code)",
};
exports.costingCode = costingCode;
const costingCodeName = {
    type: graphql_1.GraphQLString,
    description: "Cost-center code name",
};
exports.costingCodeName = costingCodeName;
const costingCodeFilter = {
    type: graphql_1.GraphQLString,
    description: "Cost-center code filter",
};
exports.costingCodeFilter = costingCodeFilter;
const counterAccountId = {
    type: graphql_1.GraphQLString,
    description: "Counter account identifier",
};
exports.counterAccountId = counterAccountId;
const counterAccountName = {
    type: graphql_1.GraphQLString,
    description: "Counter account name",
};
exports.counterAccountName = counterAccountName;
const country = {
    type: graphql_1.GraphQLString,
    description: "Country (max 20 characters)",
};
exports.country = country;
const creditorId = {
    type: graphql_1.GraphQLString,
    description: "Main credit account identifier (max 15 charactes)",
};
exports.creditorId = creditorId;
const creditorName = {
    type: graphql_1.GraphQLString,
    description: "Name of the main credit account (max 50 characters)",
};
exports.creditorName = creditorName;
const cumulativeBalance = {
    type: graphql_1.GraphQLFloat,
    description: "Cumulative balance",
};
exports.cumulativeBalance = cumulativeBalance;
const cumulativeBalanceBySortKey = {
    type: graphql_1.GraphQLFloat,
    description: "Cumulative balance by sorting code",
};
exports.cumulativeBalanceBySortKey = cumulativeBalanceBySortKey;
const cumulativeBalanceCalculated = {
    type: graphql_1.GraphQLFloat,
    description: "Calculated cumulative balance",
};
exports.cumulativeBalanceCalculated = cumulativeBalanceCalculated;
const cumulativeBalanceOfOpenSumInRecord = {
    type: graphql_1.GraphQLFloat,
    description: "Cumulative balance of total open amount of record",
};
exports.cumulativeBalanceOfOpenSumInRecord = cumulativeBalanceOfOpenSumInRecord;
const cumulativeBalanceWithoutOpeningBalance = {
    type: graphql_1.GraphQLFloat,
    description: "Cumulative balance without opening balance",
};
exports.cumulativeBalanceWithoutOpeningBalance = cumulativeBalanceWithoutOpeningBalance;
const currencyCode = {
    type: graphql_1.GraphQLString,
    description: "Currency (max 5 characters)",
};
exports.currencyCode = currencyCode;
const date = {
    type: graphql_1.GraphQLString,
    description: "Date",
};
exports.date = date;
const date3 = {
    type: graphql_1.GraphQLString,
    description: "Additional date",
};
exports.date3 = date3;
const debitOrCreditNameEnum = new graphql_1.GraphQLEnumType({
    name: "debitOrCreditNameEnum",
    description: "Credit / Debit",
    values: {
        Credit: {
            value: "Credit",
        },
        Debit: {
            value: "Debit",
        },
    },
});
const debitOrCreditName = {
    type: debitOrCreditNameEnum,
    description: "Credit / Debit",
};
exports.debitOrCreditName = debitOrCreditName;
const debitOrCreditBankEnum = new graphql_1.GraphQLEnumType({
    name: "debitOrCreditBankEnum",
    description: "Credit / Debit",
    values: {
        Credit: {
            value: "זכות",
        },
        Debit: {
            value: "חובה",
        },
    },
});
exports.debitOrCreditBankEnum = debitOrCreditBankEnum;
const debitOrCreditNameForBank = {
    type: debitOrCreditBankEnum,
    description: "Credit / Debit",
};
exports.debitOrCreditNameForBank = debitOrCreditNameForBank;
const debitOrCreditNumberEnum = new graphql_1.GraphQLEnumType({
    name: "debitOrCreditNumberEnum",
    description: "Credit / Debit",
    values: {
        Debit: {
            value: 1,
        },
        Credit: {
            value: -1,
        },
    },
});
exports.debitOrCreditNumberEnum = debitOrCreditNumberEnum;
const debitOrCreditNumber = {
    type: debitOrCreditNumberEnum,
    description: "Credit / Debit",
};
exports.debitOrCreditNumber = debitOrCreditNumber;
const debtorId = {
    type: graphql_1.GraphQLString,
    description: "Main debit account identifier (max 15 charactes)",
};
exports.debtorId = debtorId;
const debtorName = {
    type: graphql_1.GraphQLString,
    description: "Name of the main debit account (max 50 characters)",
};
exports.debtorName = debtorName;
const description = {
    type: graphql_1.GraphQLString,
    description: "Description (max 250 characters)",
};
exports.description = description;
const details1 = {
    type: graphql_1.GraphQLString,
    description: "Remarks (max 50 characters)",
};
exports.details1 = details1;
const details2 = {
    type: graphql_1.GraphQLString,
    description: "Additional remarks (max 50 characters)",
};
exports.details2 = details2;
const dueDate = {
    type: graphql_1.GraphQLString,
    description: "Due date",
};
exports.dueDate = dueDate;
const email = {
    type: graphql_1.GraphQLString,
    description: "Email",
};
exports.email = email;
const estimatedSum = {
    type: graphql_1.GraphQLFloat,
    description: "Estimated total amount",
};
exports.estimatedSum = estimatedSum;
const exchangeRateDifferences = {
    type: graphql_1.GraphQLString,
    description: "exchange rate differences",
};
exports.exchangeRateDifferences = exchangeRateDifferences;
const fax = {
    type: graphql_1.GraphQLString,
    description: "Fax (max 30 characters)",
};
exports.fax = fax;
const filter = {
    type: graphql_1.GraphQLString,
    description: "Filtering (5 characters)",
};
exports.filter = filter;
const foreignCurrencyCredit = {
    type: graphql_1.GraphQLFloat,
    description: "Credit amount in foreign currency",
};
exports.foreignCurrencyCredit = foreignCurrencyCredit;
const foreignCurrencyCumulativeBalance = {
    type: graphql_1.GraphQLFloat,
    description: "Cumulative balance in foreign currency",
};
exports.foreignCurrencyCumulativeBalance = foreignCurrencyCumulativeBalance;
const foreignCurrencyCumulativeBalanceWithoutOpeningBalance = {
    type: graphql_1.GraphQLFloat,
    description: "Cumulative balance in foreign currency without opening balance",
};
exports.foreignCurrencyCumulativeBalanceWithoutOpeningBalance = foreignCurrencyCumulativeBalanceWithoutOpeningBalance;
const foreignCurrencyDebit = {
    type: graphql_1.GraphQLFloat,
    description: "Dedit amount in foreign currency",
};
exports.foreignCurrencyDebit = foreignCurrencyDebit;
const foreignCurrencySum = {
    type: graphql_1.GraphQLFloat,
    description: "Total amount in foreign currency",
};
exports.foreignCurrencySum = foreignCurrencySum;
const foreignCurrencySumClosedInRecord = {
    type: graphql_1.GraphQLFloat,
    description: "Total amount in foreign currency closed in record",
};
exports.foreignCurrencySumClosedInRecord = foreignCurrencySumClosedInRecord;
const foreignCurrencySumOpenInRecord = {
    type: graphql_1.GraphQLFloat,
    description: "Total amount in foreign currency open  in record",
};
exports.foreignCurrencySumOpenInRecord = foreignCurrencySumOpenInRecord;
const generalDiscountPercent = {
    type: graphql_1.GraphQLFloat,
    description: "% customer discount",
};
exports.generalDiscountPercent = generalDiscountPercent;
const incomeFileNumber = {
    type: graphql_1.GraphQLString,
    description: "Income file number (max 20 characters)",
};
exports.incomeFileNumber = incomeFileNumber;
const initDate = {
    type: graphql_1.GraphQLString,
    description: "Initiate date",
};
exports.initDate = initDate;
const initTime = {
    type: graphql_1.GraphQLString,
    description: "Initiate time",
};
exports.initTime = initTime;
const inventoryId = {
    type: graphql_1.GraphQLInt,
    description: "Inventory Identifier",
};
exports.inventoryId = inventoryId;
const isActive = {
    type: graphql_1.GraphQLString,
    description: "Active/inactive account",
};
exports.isActive = isActive;
const issueDate = {
    type: graphql_1.GraphQLString,
    description: "Issue date",
};
exports.issueDate = issueDate;
const linkedFile = {
    type: graphql_1.GraphQLString,
    description: "Linked file",
};
exports.linkedFile = linkedFile;
const mainAccount = {
    type: graphql_1.GraphQLString,
    description: "Code of the main account",
};
exports.mainAccount = mainAccount;
const matchNumber = {
    type: graphql_1.GraphQLInt,
    description: "Match number",
};
exports.matchNumber = matchNumber;
const matchNumberCardAnalysis = {
    // TODO: is the same as matchNumber?
    type: graphql_1.GraphQLInt,
    description: "Match number - card analysis",
};
exports.matchNumberCardAnalysis = matchNumberCardAnalysis;
const maxCredit = {
    type: graphql_1.GraphQLFloat,
    description: "Credit limit",
};
exports.maxCredit = maxCredit;
const maxCreditCurrency = {
    type: graphql_1.GraphQLString,
    description: "Credit currency (max 5 characters)",
};
exports.maxCreditCurrency = maxCreditCurrency;
const maxObligo = {
    type: graphql_1.GraphQLFloat,
    description: "Credit risk limit",
};
exports.maxObligo = maxObligo;
const maxObligoCurrency = {
    type: graphql_1.GraphQLString,
    description: "Credit risk currency (max 5 characters)",
};
exports.maxObligoCurrency = maxObligoCurrency;
const occupation = {
    type: graphql_1.GraphQLString,
    description: "Occupation (max 15 characters)",
};
exports.occupation = occupation;
const phone = {
    type: graphql_1.GraphQLString,
    description: "Phone (max 30 characters)",
};
exports.phone = phone;
const quantity = {
    type: graphql_1.GraphQLFloat,
    description: "Quantity",
};
exports.quantity = quantity;
const reference1 = {
    type: graphql_1.GraphQLInt,
    description: "Reference",
};
exports.reference1 = reference1;
const reference2 = {
    type: graphql_1.GraphQLInt,
    description: "Reference-2",
};
exports.reference2 = reference2;
const reference3 = {
    type: graphql_1.GraphQLInt,
    description: "Referenc-3",
};
exports.reference3 = reference3;
const registerNumber = {
    type: graphql_1.GraphQLInt,
    description: "Register number",
};
exports.registerNumber = registerNumber;
const shekelCredit = {
    type: graphql_1.GraphQLFloat,
    description: "Credit amount in NIS",
};
exports.shekelCredit = shekelCredit;
const shekelCumulativeBalanceByFilter = {
    type: graphql_1.GraphQLFloat,
    description: "Cumulative balance in NIS by filter",
};
exports.shekelCumulativeBalanceByFilter = shekelCumulativeBalanceByFilter;
const shekelDebit = {
    type: graphql_1.GraphQLFloat,
    description: "Dedit amount in NIS",
};
exports.shekelDebit = shekelDebit;
const shekelSum = {
    type: graphql_1.GraphQLFloat,
    description: "Total NIS amount",
};
exports.shekelSum = shekelSum;
const shekelSumClosedInRecord = {
    type: graphql_1.GraphQLFloat,
    description: "Total NIS amount closed in record",
};
exports.shekelSumClosedInRecord = shekelSumClosedInRecord;
const shekelSumOpenInRecord = {
    type: graphql_1.GraphQLFloat,
    description: "Total NIS amount open  in record",
};
exports.shekelSumOpenInRecord = shekelSumOpenInRecord;
const sortGroup = {
    type: graphql_1.GraphQLInt,
    description: "Sorting code",
};
exports.sortGroup = sortGroup;
const status = {
    type: graphql_1.GraphQLString,
    description: "Status",
};
exports.status = status;
const stornoCancelledTransactionId = {
    type: graphql_1.GraphQLInt,
    description: "Identifier of transaction cancelled by Strogno",
};
exports.stornoCancelledTransactionId = stornoCancelledTransactionId;
const sum = {
    type: graphql_1.GraphQLFloat,
    description: "Total ammount",
};
exports.sum = sum;
const transactionType = {
    type: graphql_1.GraphQLString,
    description: "Transaction type code",
};
exports.transactionType = transactionType;
const username = {
    type: graphql_1.GraphQLString,
    description: "User name",
};
exports.username = username;
const valueDate = {
    type: graphql_1.GraphQLString,
    description: "Date",
};
exports.valueDate = valueDate;
const vatExempt = {
    type: graphql_1.GraphQLString,
    description: "VAT exempt, 1/0",
};
exports.vatExempt = vatExempt;
const withholdingPercent = {
    type: graphql_1.GraphQLFloat,
    description: "% withholding tax",
};
exports.withholdingPercent = withholdingPercent;
const withholdingValidity = {
    type: graphql_1.GraphQLString,
    description: "Validity date of the % withholding tax",
};
exports.withholdingValidity = withholdingValidity;
const zipcode = {
    type: graphql_1.GraphQLString,
    description: "Zip code (max 10 characters)",
};
exports.zipcode = zipcode;
//# sourceMappingURL=fields.js.map