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
} from "graphql";
import * as resolver from "../resolvers";
import * as graphqlType from "./graphqlTypes";
import * as field from "./fields";

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
    counterAccountId: field.counterAccountId,
    counterAccountName: field.counterAccountName,
    cumulativeBalance: field.cumulativeBalance,
    cumulativeBalanceBySortKey: field.cumulativeBalanceBySortKey,
    cumulativeBalanceOfOpenSumInRecord:
      field.cumulativeBalanceOfOpenSumInRecord,
    cumulativeBalanceWithoutOpeningBalance:
      field.cumulativeBalanceWithoutOpeningBalance,
    debitOrCredit: field.debitOrCreditName,
    debitOrCreditNumber: field.debitOrCreditNumber,
    estimatedSum: field.estimatedSum,
    foreignCurrencyCredit: field.foreignCurrencyCredit,
    foreignCurrencyCumulativeBalance: field.foreignCurrencyCumulativeBalance,
    foreignCurrencyCumulativeBalanceWithoutOpeningBalance:
      field.foreignCurrencyCumulativeBalanceWithoutOpeningBalance,
    foreignCurrencyDebit: field.foreignCurrencyDebit,
    foreignCurrencySum: field.foreignCurrencySum,
    foreignCurrencySumClosedInRecord: field.foreignCurrencySumClosedInRecord,
    foreignCurrencySumOpenInRecord: field.foreignCurrencySumOpenInRecord,
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Record identifier",
    },
    matchNumberCardAnalysis: field.matchNumberCardAnalysis,
    shekelCredit: field.shekelCredit,
    shekelCumulativeBalanceByFilter: field.shekelCumulativeBalanceByFilter,
    shekelDebit: field.shekelDebit,
    shekelSum: field.shekelSum,
    shekelSumClosedInRecord: field.shekelSumClosedInRecord,
    shekelSumOpenInRecord: field.shekelSumOpenInRecord,
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
    authorizedDealerNumber: field.authorizedDealerNumber,
    batch: {
      type: graphqlType.BatchType,
      description: "Batch details",
      resolve: (transaction) => resolver.batchById(transaction.batchId),
    },
    batchId: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Batch Identifier",
    },
    branch: field.branch,
    branchName: field.branchName,
    chequeId: field.chequeId,
    costingCode: field.costingCode,
    costingCodeName: field.costingCodeName,
    costingCodeFilter: field.costingCodeFilter,
    creditor: {
      type: graphqlType.AccountType,
      description: "Main credit account details",
      resolve: (transaction) => resolver.accountById(transaction.creditorId),
    },
    creditorId: field.creditorId,
    currencyCode: field.currencyCode,
    date3: field.date3,
    debtor: {
      type: graphqlType.AccountType,
      description: "Main debit account details",
      resolve: (transaction) => resolver.accountById(transaction.debtorId),
    },
    debtorId: field.debtorId,
    description: field.description,
    details1: field.details1,
    details2: field.details2,
    dueDate: field.dueDate,
    exchangeRateDifferences: field.exchangeRateDifferences,
    foreignCurrencySum: field.foreignCurrencySum,
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Transaction Identifier",
    },
    inventoryId: field.inventoryId,
    linkedFile: field.linkedFile,
    quantity: field.quantity,
    records: {
      type: GraphQLList(RecordType),
      description: "Transaction's records details list",
      resolve: (transaction) => resolver.recordsByTransactionId(transaction.id),
    },
    reference1: field.reference1,
    reference2: field.reference2,
    reference3: field.reference3,
    registerNumber: field.registerNumber,
    shekelSum: field.shekelSum,
    stornoCancelledTransactionId: field.stornoCancelledTransactionId,
    type: field.transactionType,
    username: field.username,
    valueDate: field.valueDate,
  }),
});

const PostTransactionsResponseFields = {
  // TODO: convers keys
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
    authorizedDealerNumber: field.authorizedDealerNumber,
    branch: field.branch,
    costingCode: field.costingCode,
    creditorId: field.creditorId,
    creditorName: field.creditorName,
    currencyCode: field.currencyCode,
    date3: field.date3,
    debtorId: field.debtorId,
    debtorName: field.debtorName,
    description: field.description,
    details1: field.details1,
    details2: field.details2,
    dueDate: field.dueDate,
    foreignCurrencySum: field.foreignCurrencySum,
    quantity: field.quantity,
    reference1: field.reference1,
    reference2: field.reference2,
    reference3: field.reference3,
    shekelSum: {
      type: GraphQLNonNull(GraphQLFloat),
      description: "Total NIS amount (credit or debit)",
    },
    type: field.transactionType,
    valueDate: field.valueDate,
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
