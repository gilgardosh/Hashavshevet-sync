import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLUnionType,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLEnumType,
} from "graphql";
import * as resolver from "../resolvers";
import * as graphqlType from "../types";
import * as field from "./fields"

const RecordType = new GraphQLObjectType({
  name: "Record",
  description: "A Single Record",
  fields: () => ({
    account: {
      type: graphqlType.AccountType,
      description: "Main account details",
      resolve: (record) => resolver.accountById(record.accountId),
    },
    accountId: {
      type: GraphQLNonNull(GraphQLString),
      description: "Main account details identifier",
    },
    batch: {
      type: graphqlType.BatchType,
      description: "Batch details",
      resolve: (record) => resolver.batchById(record.batchId),
    },
    batchId: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Batch identifier",
    },
    counterAccount: {
      type: graphqlType.AccountType,
      description: "Counter account details",
      resolve: (record) => resolver.accountById(record.counterAccountId),
    },
    counterAccountId: {
      type: GraphQLString,
      description: "Counter account identifier",
    },
    counterAccountName: {
      type: GraphQLString, // TODO: can be removed
      description: "Counter account name",
    },
    cumulativeBalance: {
      type: GraphQLFloat,
      description: "Cumulative balance",
    },
    cumulativeBalanceBySortKey: {
      type: GraphQLFloat,
      description: "Cumulative balance by sorting code",
    },
    cumulativeBalanceOfOpenSumInRecord: {
      type: GraphQLFloat,
      description: "Cumulative balance of total open amount of record",
    },
    cumulativeBalanceWithoutOpeningBalance: {
      type: GraphQLFloat,
      description: "Cumulative balance without opening balance",
    },
    debitOrCredit: {
      type: GraphQLString,
      description: "Credit / Debit",
    },
    debitOrCreditNumber: {
      type: field.debitOrCreditNumberEnum,
      description: "Credit / Debit",
    },
    estimatedSum: {
      type: GraphQLFloat,
      description: "Estimated total amount",
    },
    foreignCurrencyCredit: {
      type: GraphQLFloat,
      description: "Credit amount in foreign currency",
    },
    foreignCurrencyCumulativeBalance: {
      type: GraphQLFloat,
      description: "Cumulative balance in foreign currency",
    },
    foreignCurrencyCumulativeBalanceWithoutOpeningBalance: {
      type: GraphQLFloat,
      description: "Cumulative balance in foreign currency without opening balance",
    },
    foreignCurrencyDebit: {
      type: GraphQLFloat,
      description: "Dedit amount in foreign currency",
    },
    foreignCurrencySum: {
      type: GraphQLFloat,
      description: "Total amount in foreign currency",
    },
    foreignCurrencySumClosedInRecord: {
      type: GraphQLFloat,
      description: "Total amount in foreign currency closed in record",
    },
    foreignCurrencySunOpenInRecord: {
      type: GraphQLFloat,
      description: "Total amount in foreign currency open  in record",
    },
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Record identifier",
    },
    matchNumberCardAnalysis: {
      type: GraphQLInt,
      description: "Match number - card analysis",
    },
    shekelCredit: {
      type: GraphQLFloat,
      description: "Credit amount in NIS",
    },
    shekelCumulativeBalanceBySector: {
      type: GraphQLFloat,
      description: "Cumulative balance in NIS by filter",
    },
    shekelDebit: {
      type: GraphQLFloat,
      description: "Dedit amount in NIS",
    },
    shekelSum: {
      type: GraphQLFloat,
      description: "Total NIS amount",
    },
    shekelSumClosedInRecord: {
      type: GraphQLFloat,
      description: "Total NIS amount closed in record",
    },
    shekelSumOpenInRecord: {
      type: GraphQLFloat,
      description: "Total NIS amount open  in record",
    },
    transaction: {
      type: TransactionType,
      description: "Transaction details",
      resolve: (record) => resolver.transactionById(record.transactionId),
    },
    transactionId: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Transaction identifier",
    },
  }),
});

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  description: "A Transaction of Some Records",
  fields: () => ({
    authorizedDealerNumber: {
      type: GraphQLString,
      description: "VAT registration number",
    },
    batch: {
      type: graphqlType.BatchType,
      description: "Batch details",
      resolve: (transaction) => resolver.batchById(transaction.batchId),
    },
    batchId: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Batch Identifier",
    },
    branch: {
      type: GraphQLInt,
      description: "Branch", // TODO: NonNull? Enum  type?
    },
    branchName: {
      type: GraphQLString,
      description: "Branch Name",
    },
    chequeId: {
      type: GraphQLInt,
      description: "Cheque Identifier",
    },
    costingCode: {
      type: GraphQLString,
      description: "Cost-center code",
    },
    costingCodeName: {
      type: GraphQLString,
      description: "Cost-center code name",
    },
    costingCodeSector: {
      type: GraphQLString,
      description: "Cost-center code filter",
    },
    creditor: {
      type: graphqlType.AccountType,
      description: "Main credit account details",
      resolve: (transaction) => resolver.accountById(transaction.creditorId),
    },
    creditorId: {
      type: GraphQLString,
      description: "Main credit account Identifier",
    },
    currencyCode: {
      type: GraphQLString,
      description: "Currency", // TODO: Enum type?
    },
    date3: {
      type: GraphQLString,
      description: "Additional date",
    },
    debtor: {
      type: graphqlType.AccountType,
      description: "Main debit account details",
      resolve: (transaction) => resolver.accountById(transaction.debtorId),
    },
    debtorId: {
      type: GraphQLString,
      description: "Main debit account identifier",
    },
    description: {
      type: GraphQLString,
      description: "Description",
    },
    details1: {
      type: GraphQLString,
      description: "Remarks",
    },
    details2: {
      type: GraphQLString,
      description: "Additional remarks",
    },
    dueDate: {
      type: GraphQLString,
      description: "Due date", // TODO: Date type
    },
    exchangeRateDifferences: {
      type: GraphQLString,
      description: "exchange rate differences", // TODO: Enum type, perhaps NonNull
    },
    foreignCurrencySum: {
      type: GraphQLFloat,
      description: "Total amount in foreign currency",
    },
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Transaction Identifier",
    },
    inventoryId: {
      type: GraphQLInt,
      description: "Inventory Identifier",
    },
    linkedFile: {
      type: GraphQLString,
      description: "Linked file",
    },
    quantity: {
      type: GraphQLFloat,
      description: "Quantity",
    },
    records: {
      type: GraphQLList(RecordType),
      description: "Transaction's records details list",
      resolve: (transaction) => resolver.recordsByTransactionId(transaction.id),
    },
    reference1: {
      type: GraphQLInt,
      description: "Reference",
    },
    reference2: {
      type: GraphQLInt,
      description: "Reference-2",
    },
    reference3: {
      type: GraphQLInt,
      description: "Reference-3",
    },
    registerNumber: {
      type: GraphQLInt,
      description: "Register number",
    },
    shekelSum: {
      type: GraphQLFloat,
      description: "Total NIS amount",
    },
    stornoCancelledTransactionId: {
      type: GraphQLInt,
      description: "Identifier of transaction cancelled by Strogno",
    },
    type: {
      type: GraphQLString,
      description: "Transaction type code", // TODO: Enum type?
    },
    username: {
      type: GraphQLString,
      description: "User name",
    },
    valueDate: {
      type: GraphQLString,
      description: "Date", // TODO: Date type
    },
  }),
});

const PostTransactionsResponseFields = {
  // TODO: rename fields
  status: {
    type: GraphQLString,
    description: "Final Status",
  },
  batch_issue: {
    type: GraphQLString,
    description: "Batch Issue Status",
  },
  batch_check: {
    type: GraphQLString,
    description: "Batch Check Status",
  },
  newbatch: {
    type: GraphQLInt,
    description: "Batch identifier (on cases new batch was created)",
  },
  batchno: {
    type: GraphQLInt,
    description: "Batch identifier (on cases added to existing batch)",
  },
  batchId: {
    type: GraphQLInt,
    description: "Batch identifier",
    resolve: (res) => {
      return res.newbatch || res.batchno;
    },
  },
  batch: {
    type: graphqlType.BatchType,
    description: "Batch Details",
    resolve: (res) => {
      return resolver.batchById(res.newbatch || res.batchno);
    },
  },
};

const PostTransactionsResponseWithoutErrors = new GraphQLObjectType({
  name: "PostTransactionsResponsWithoutErrors",
  description: "Response for Posting Transactions to a Batch",
  fields: () => ({
    ...PostTransactionsResponseFields,
    errors: {
      type: GraphQLString,
      description: "errors list",
    },
  }),
});

const PostTransactionsResponseWithErrors = new GraphQLObjectType({
  name: "PostTransactionsResponsWithErrors",
  description: "Response for Posting Transactions to a Batch",
  fields: () => ({
    ...PostTransactionsResponseFields,
    errors: {
      type: GraphQLList(graphqlType.recordErrorType),
      description: "errors list",
    },
  }),
});

const PostTransactionsResponseType = new GraphQLUnionType({
  name: "PostTransactionsResponse",
  types: [
    PostTransactionsResponseWithoutErrors,
    PostTransactionsResponseWithErrors,
  ],
  description: "Response for Posting Transactions to a Batch",
  resolveType: (data) => {
    if (typeof data.errors === "string" || typeof data.errors === "undefined") {
      return PostTransactionsResponseWithoutErrors;
    } else if (typeof data.errors === "object") {
      return PostTransactionsResponseWithErrors;
    }
  },
});

const PostTransaction = new GraphQLInputObjectType({
  name: "PostTransaction",
  description: "Interface for posting new Transaction",
  fields: () => ({
    authorizedDealerNumber: {
      type: GraphQLString,
      description: "VAT registration number (max 9 characters)", // TODO: create validation
    },
    branch: {
      type: GraphQLInt,
      description: "Branch",
    },
    costingCode: {
      type: GraphQLString,
      description: "Cost-center code (existing code)",
    },
    creditorId: {
      type: GraphQLNonNull(GraphQLString),
      description: "Main credit account identifier (max 15 charactes)", // TODO: create validation
    },
    creditorName: {
      type: GraphQLString,
      description: "Name of the main credit account (max 50 characters)", // TODO: create validation
    },
    currencyCode: {
      type: GraphQLString,
      description: "Currency (max 5 characters)", // TODO: create validation
    },
    date3: {
      type: GraphQLString,
      description: "Additional date", // TODO: create validation for date type mm/dd/yyyy
    },
    debtorId: {
      type: GraphQLNonNull(GraphQLString),
      description: "Main debit account identifier (max 15 charactes)", // TODO: create validation
    },
    debtorName: {
      type: GraphQLString,
      description: "Name of the main debit account (max 50 characters)", // TODO: create validation
    },
    description: {
      type: GraphQLString,
      description: "Description (max 250 characters)", // TODO: create validation
    },
    details1: {
      type: GraphQLString,
      description: "Remarks (max 50 characters)", // TODO: create validation
    },
    details2: {
      type: GraphQLString,
      description: "Additional remarks (max 50 characters)", // TODO: create validation
    },
    dueDate: {
      type: GraphQLString,
      description: "Due date", // TODO: create validation for date type mm/dd/yyyy
    },
    foreignCurrencySum: {
      type: GraphQLFloat,
      description: "Total amount in foreign currency (credit or debit)",
    },
    quantity: {
      type: GraphQLFloat,
      description: "Quantity",
    },
    reference1: {
      type: GraphQLInt,
      description: "Reference",
    },
    reference2: {
      type: GraphQLInt,
      description: "Reference-2",
    },
    reference3: {
      type: GraphQLInt,
      description: "Referenc-3",
    },
    shekelSum: {
      type: GraphQLNonNull(GraphQLFloat),
      description: "Total NIS amount (credit or debit)",
    },
    type: {
      type: GraphQLString,
      description: "Transaction type code", // TODO: is ENUM?
    },
    valueDate: {
      type: GraphQLString,
      description: "Date", // TODO: create validation for date type mm/dd/yyyy
    },
    records: {
      type: GraphQLList(PostRecord),
      description: "List of Records to add.",
    },
  }),
});

const PostRecord = new GraphQLInputObjectType({
  name: "PostRecord",
  description: "Interface for posting new Record",
  fields: () => ({
    accountId: {
      type: GraphQLNonNull(GraphQLString),
      description: "Account identifier (max 15 characters)", // TODO: create validation
    },
    debitOrCreditNumber: {
      type: GraphQLNonNull(field.debitOrCreditNumberEnum),
      description: "Credit / Debit",
    },
    foreignCurrencySum: {
      type: GraphQLFloat,
      description: "Foreign currency amount",
    },
    shekelSum: {
      type: GraphQLNonNull(GraphQLFloat),
      description: "NIS amount",
    },
  }),
});

const postTransactionsToBatchArgs = {
  batchId: {
    type: GraphQLInt,
    description:
      "Insert the transactions to the temporary batch having this number. If no such temporary batch exists, open a new batch.",
  },
  checkBatch: {
    type: GraphQLBoolean,
    description: "check the batch for errors and return the batch status",
  },
  insertToLastBatch: {
    type: GraphQLBoolean,
    description:
      "Insert the transactions to the last open temporary batch. If false, open a new batch.",
  },
  issueBatch: {
    type: GraphQLBoolean,
    description: "input the temporary batch into the permanent storage.",
  },
  transactionsList: {
    type: GraphQLList(PostTransaction),
    description: "List of Transactions to add.",
  },
};

export {
  RecordType,
  TransactionType,
  PostTransactionsResponseType,
  postTransactionsToBatchArgs,
};
