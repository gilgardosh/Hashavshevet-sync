import {
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
} from "graphql";

const accountId = {
  type: GraphQLString,
  description: "Account identifier",
};
const accountName = {
  type: GraphQLString,
  description: "Account name (max 50 characters)", // TODO: add varification
};
const accountantTransfer = {
  type: GraphQLString,
  description: "",
};
const accountType = {
  type: GraphQLString, // TODO: Enum type? NonNull?
  description: "Type of account",
};
const address = {
  type: GraphQLString,
  description: "Address (max 50 characters)", // TODO: add validation
};
const adjustedRecord = {
  type: GraphQLString,
  description: "Adjusted record",
};
const agent = {
  type: GraphQLInt,
  description: "Salesperson",
};
const authorizedDealerNumber = {
  type: GraphQLString,
  description: "VAT registration number (max [20 or 9?] characters)", // TODO: add validation
};
const bankPageId = {
  type: GraphQLInt,
  description: "Bank page identifier",
};
const balanceCode = {
  type: GraphQLString, // TODO: NonNull?
  description: "Code for the balance and profit and loss report",
};
const bankAccountId = {
  type: GraphQLString,
  description: "Bank account # (max 20 characters)", // TODO: add validation
};
const bankBranchId = {
  type: GraphQLString,
  description: "Bank branch code (max 5 characters)", // TODO: add validation
};
const bankId = {
  type: GraphQLString,
  description: "Bank code (max 3 characters)", // TODO: add validation
};
const bankPageRecordId = {
  type: GraphQLInt,
  description: "Bank page record identifier",
};
const batchType = {
  type: GraphQLString, // TODO: Enum type? NonNull?
  description: "Type",
};
const branch = {
  type: GraphQLInt,
  description: "Branch",
};
const branchName = {
  type: GraphQLString,
  description: "Branch Name",
};
const chequeId = {
  type: GraphQLInt,
  description: "Cheque Identifier",
};
const centralAccount = {
  type: GraphQLString,
  description: "",
};
const cellphone = {
  type: GraphQLString,
  description: "Callphone",
};
const city = {
  type: GraphQLString,
  description: "City (max 20 characters)", // TODO: add validation
};
const costingCode = {
  type: GraphQLString,
  description: "Code of cost center (existing code)",
};
const costingCodeName = {
  type: GraphQLString,
  description: "Cost-center code name",
};
const costingCodeFilter = {
  type: GraphQLString,
  description: "Cost-center code filter",
};
const counterAccountId = {
  type: GraphQLString,
  description: "Counter account identifier",
};
const counterAccountName = {
  type: GraphQLString, // TODO: can be removed
  description: "Counter account name",
};
const country = {
  type: GraphQLString,
  description: "Country (max 20 characters)", // TODO: add validation
};
const creditorId = {
  type: GraphQLString,
  description: "Main credit account identifier (max 15 charactes)", // TODO: create validation
};
const creditorName = {
  type: GraphQLString,
  description: "Name of the main credit account (max 50 characters)", // TODO: create validation
};
const cumulativeBalance = {
  type: GraphQLFloat,
  description: "Cumulative balance",
};
const cumulativeBalanceBySortKey = {
  type: GraphQLFloat,
  description: "Cumulative balance by sorting code",
};
const cumulativeBalanceCalculated = {
  type: GraphQLFloat,
  description: "Calculated cumulative balance",
};
const cumulativeBalanceOfOpenSumInRecord = {
  type: GraphQLFloat,
  description: "Cumulative balance of total open amount of record",
};
const cumulativeBalanceWithoutOpeningBalance = {
  type: GraphQLFloat,
  description: "Cumulative balance without opening balance",
};
const currencyCode = {
  type: GraphQLString,
  description: "Currency (max 5 characters)", // TODO: create validation
};

const date = {
  type: GraphQLString, // TODO: Date type
  description: "Date",
};
const date3 = {
  type: GraphQLString,
  description: "Additional date", // TODO: create validation for date type mm/dd/yyyy
};
const debitOrCreditNameEnum = new GraphQLEnumType({
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
const debitOrCreditNumberEnum = new GraphQLEnumType({
  name: "debitOrCreditNumberEnum",
  description: "Credit / Debit",
  values: {
    Credit: {
      value: 1,
    },
    Debit: {
      value: -1,
    },
  },
});
const debitOrCreditNumber = {
  type: debitOrCreditNumberEnum,
  description: "Credit / Debit",
};
const debtorId = {
  type: GraphQLString,
  description: "Main debit account identifier (max 15 charactes)", // TODO: create validation
};
const debtorName = {
  type: GraphQLString,
  description: "Name of the main debit account (max 50 characters)", // TODO: create validation
};
const description = {
  type: GraphQLString,
  description: "Description (max 250 characters)", // TODO: create validation
};
const details1 = {
  type: GraphQLString,
  description: "Remarks (max 50 characters)", // TODO: add varification
};
const details2 = {
  type: GraphQLString,
  description: "Additional remarks (max 50 characters)", // TODO: create validation
};
const dueDate = {
  type: GraphQLString,
  description: "Due date", // TODO: create validation for date type mm/dd/yyyy
};
const email = {
  type: GraphQLString,
  description: "Email",
};
const estimatedSum = {
  type: GraphQLFloat,
  description: "Estimated total amount",
};
const exchangeRateDifferences = {
  type: GraphQLString,
  description: "exchange rate differences", // TODO: Enum type, perhaps NonNull
};
const fax = {
  type: GraphQLString,
  description: "Fax (max 30 characters)", // TODO: add validation
};
const filter = {
  type: GraphQLString, // TODO: NonNull? add varification
  description: "Filtering (5 characters)",
};
const foreignCurrencyCredit = {
  type: GraphQLFloat,
  description: "Credit amount in foreign currency",
};
const foreignCurrencyCumulativeBalance = {
  type: GraphQLFloat,
  description: "Cumulative balance in foreign currency",
};
const foreignCurrencyCumulativeBalanceWithoutOpeningBalance = {
  type: GraphQLFloat,
  description: "Cumulative balance in foreign currency without opening balance",
};
const foreignCurrencyDebit = {
  type: GraphQLFloat,
  description: "Dedit amount in foreign currency",
};
const foreignCurrencySum = {
  type: GraphQLFloat,
  description: "Total amount in foreign currency",
};
const foreignCurrencySumClosedInRecord = {
  type: GraphQLFloat,
  description: "Total amount in foreign currency closed in record",
};
const foreignCurrencySumOpenInRecord = {
  type: GraphQLFloat,
  description: "Total amount in foreign currency open  in record",
};
const generalDiscountPercent = {
  type: GraphQLFloat,
  description: "% customer discount",
};
const incomeFileNumber = {
  type: GraphQLString,
  description: "Income file number (max 20 characters)",
};
const initDate = {
  type: GraphQLString, // TODO: Date type
  description: "Initiate date",
};
const initTime = {
  type: GraphQLString,
  description: "Initiate time",
};
const inventoryId = {
  type: GraphQLInt,
  description: "Inventory Identifier",
};
const isActive = {
  type: GraphQLString, // TODO: Enum type? NonNull?
  description: "Active/inactive account",
};
const issueDate = {
  type: GraphQLString, // TODO: Date type
  description: "Issue date",
};
const linkedFile = {
  type: GraphQLString,
  description: "Linked file",
};
const mainAccount = {
  type: GraphQLString, // TODO: NonNull? documentation says "INT"
  description: "Code of the main account",
};
const matchNumber = {
  type: GraphQLInt,
  description: "Match number",
};
const matchNumberCardAnalysis = {
  // TODO: is the same as matchNumber?
  type: GraphQLInt,
  description: "Match number - card analysis",
};
const maxCredit = {
  type: GraphQLFloat,
  description: "Credit limit",
};
const maxCreditCurrency = {
  type: GraphQLString, // TODO: Enum type? NonNull?
  description: "Credit currency (max 5 characters)",
};
const maxObligo = {
  type: GraphQLFloat,
  description: "Credit risk limit",
};
const maxObligoCurrency = {
  type: GraphQLString, // TODO: Enum type? NonNull?
  description: "Credit risk currency (max 5 characters)",
};
const occupation = {
  type: GraphQLString,
  description: "Occupation (max 15 characters)",
};
const phone = {
  type: GraphQLString,
  description: "Phone (max 30 characters)", // TODO: add validation
};
const quantity = {
  type: GraphQLFloat,
  description: "Quantity",
};
const reference1 = {
  type: GraphQLInt,
  description: "Reference",
};
const reference2 = {
  type: GraphQLInt,
  description: "Reference-2",
};
const reference3 = {
  type: GraphQLInt,
  description: "Referenc-3",
};
const registerNumber = {
  type: GraphQLInt,
  description: "Register number",
};
const shekelCredit = {
  type: GraphQLFloat,
  description: "Credit amount in NIS",
};
const shekelCumulativeBalanceByFilter = {
  type: GraphQLFloat,
  description: "Cumulative balance in NIS by filter",
};
const shekelDebit = {
  type: GraphQLFloat,
  description: "Dedit amount in NIS",
};
const shekelSum = {
  type: GraphQLFloat,
  description: "Total NIS amount",
};
const shekelSumClosedInRecord = {
  type: GraphQLFloat,
  description: "Total NIS amount closed in record",
};
const shekelSumOpenInRecord = {
  type: GraphQLFloat,
  description: "Total NIS amount open  in record",
};
const sortGroup = {
  type: GraphQLInt, // TODO: Enum type?
  description: "Sorting code",
};
const status = {
  type: GraphQLString, // TODO: Enum type? NonNull?
  description: "Status",
};
const stornoCancelledTransactionId = {
  type: GraphQLInt,
  description: "Identifier of transaction cancelled by Strogno",
};
const sum = {
  type: GraphQLFloat,
  description: "Total ammount",
};
const transactionType = {
  type: GraphQLString,
  description: "Transaction type code", // TODO: is ENUM?
};
const username = {
  type: GraphQLString,
  description: "User name",
};
const valueDate = {
  type: GraphQLString,
  description: "Date", // TODO: create validation for date type mm/dd/yyyy
};
const vatExempt = {
  type: GraphQLString, // TODO: Enum type, NonNull
  description: "VAT exempt, 1/0",
};
const withholdingPercent = {
  type: GraphQLFloat,
  description: "% withholding tax",
};
const withholdingValidity = {
  type: GraphQLString, // TODO: Date type. mm/dd/yyyy NonNull?
  description: "Validity date of the % withholding tax",
};
const zipcode = {
  type: GraphQLString,
  description: "Zip code (max 10 characters)", // TODO: add validation
};

export {
  accountantTransfer,
  accountId,
  accountName,
  accountType,
  address,
  adjustedRecord,
  agent,
  authorizedDealerNumber,
  balanceCode,
  bankAccountId,
  bankBranchId,
  bankPageId,
  bankPageRecordId,
  bankId,
  batchType,
  branch,
  branchName,
  chequeId,
  centralAccount,
  cellphone,
  city,
  costingCode,
  costingCodeName,
  costingCodeFilter,
  counterAccountId,
  counterAccountName,
  country,
  creditorId,
  creditorName,
  cumulativeBalance,
  cumulativeBalanceBySortKey,
  cumulativeBalanceCalculated,
  cumulativeBalanceOfOpenSumInRecord,
  cumulativeBalanceWithoutOpeningBalance,
  currencyCode,
  date,
  date3,
  debitOrCreditName,
  debitOrCreditNumber,
  debitOrCreditNumberEnum,
  debtorId,
  debtorName,
  description,
  details1,
  details2,
  dueDate,
  email,
  estimatedSum,
  exchangeRateDifferences,
  fax,
  filter,
  foreignCurrencyCredit,
  foreignCurrencyCumulativeBalance,
  foreignCurrencyCumulativeBalanceWithoutOpeningBalance,
  foreignCurrencyDebit,
  foreignCurrencySum,
  foreignCurrencySumClosedInRecord,
  foreignCurrencySumOpenInRecord,
  generalDiscountPercent,
  incomeFileNumber,
  initDate,
  initTime,
  inventoryId,
  isActive,
  issueDate,
  linkedFile,
  mainAccount,
  matchNumber,
  matchNumberCardAnalysis,
  maxCredit,
  maxCreditCurrency,
  maxObligo,
  maxObligoCurrency,
  occupation,
  phone,
  quantity,
  reference1,
  reference2,
  reference3,
  registerNumber,
  shekelCredit,
  shekelCumulativeBalanceByFilter,
  shekelDebit,
  shekelSum,
  shekelSumClosedInRecord,
  shekelSumOpenInRecord,
  sortGroup,
  status,
  stornoCancelledTransactionId,
  sum,
  transactionType,
  username,
  valueDate,
  vatExempt,
  withholdingPercent,
  withholdingValidity,
  zipcode,
};
