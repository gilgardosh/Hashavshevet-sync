import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLUnionType,
  GraphQLInputObjectType,
} from "graphql";
import * as resolver from "../resolvers";
import * as type from "../types";

const RecordType = new GraphQLObjectType({
  name: "Record",
  description: "A Single Record",
  fields: () => ({
    debitOrCredit: {
      type: GraphQLNonNull(GraphQLString),
    },
    counterAccountId: {
      type: GraphQLString,
    },
    matchNumberCardAnalysis: {
      type: GraphQLInt,
    },
    debitOrCreditNumber: {
      type: GraphQLNonNull(GraphQLInt),
    },
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    accountId: {
      type: GraphQLNonNull(GraphQLString),
    },
    counterAccountName: {
      type: GraphQLString, // can be removed
    },
    shekelCredit: {
      type: GraphQLFloat,
    },
    shekelDebit: {
      type: GraphQLFloat,
    },
    shekelSum: {
      type: GraphQLFloat,
    },
    shekelSumClosedInRecord: {
      type: GraphQLFloat,
    },
    shekelSumOpenInRecord: {
      type: GraphQLFloat,
    },
    cumulativeBalance: {
      type: GraphQLFloat,
    },
    foreignCurrencyCumulativeBalanceWithoutOpeningBalance: {
      type: GraphQLFloat,
    },
    cumulativeBalanceWithoutOpeningBalance: {
      type: GraphQLFloat,
    },
    shekelCumulativeBalanceBySector: {
      type: GraphQLFloat,
    },
    cumulativeBalanceBySortKey: {
      type: GraphQLFloat,
    },
    cumulativeBalanceOfOpenSumInRecord: {
      type: GraphQLFloat,
    },
    foreignCurrencyCredit: {
      type: GraphQLFloat,
    },
    foreignCurrencyDebit: {
      type: GraphQLFloat,
    },
    foreignCurrencyCumulativeBalance: {
      type: GraphQLFloat,
    },
    foreignCurrencySum: {
      type: GraphQLFloat,
    },
    foreignCurrencySumClosedInRecord: {
      type: GraphQLFloat,
    },
    foreignCurrencySunOpenInRecord: {
      type: GraphQLFloat,
    },
    estimatedSum: {
      type: GraphQLFloat,
    },
    transactionId: {
      type: GraphQLNonNull(GraphQLInt),
    },
    batchId: {
      type: GraphQLNonNull(GraphQLInt),
    },
    transaction: {
      type: TransactionType,
      resolve: (record) => {
        return resolver.transactionById(record.transactionId);
      },
    },
    batch: {
      type: type.BatchType,
      resolve: (record) => {
        return resolver.batchById(record.batchId);
      },
    },
    account: {
      type: type.AccountType,
      resolve: (record) => {
        return resolver.accountById(record.accountId);
      },
    },
    counterAccount: {
      type: type.AccountType,
      resolve: (record) => {
        return resolver.accountById(record.counterAccountId);
      },
    },
  }),
});

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  description: "A Transaction of Some Records",
  fields: () => ({
    debtorId: {
      type: GraphQLString,
    },
    creditorId: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString, // Enum type?
    },
    currencyCode: {
      type: GraphQLString, // Enum type?
    },
    foreignCurrencySum: {
      type: GraphQLFloat,
    },
    shekelSum: {
      type: GraphQLFloat,
    },
    reference1: {
      type: GraphQLInt,
    },
    reference2: {
      type: GraphQLInt,
    },
    reference3: {
      type: GraphQLInt,
    },
    valueDate: {
      type: GraphQLString, // Date type
    },
    dueDate: {
      type: GraphQLString, // Date type
    },
    details1: {
      type: GraphQLString,
    },
    details2: {
      type: GraphQLString,
    },
    exchangeRateDifferences: {
      type: GraphQLString, // Enum type, perhaps NonNull
    },
    costingCodeSector: {
      type: GraphQLString,
    },
    quantity: {
      type: GraphQLFloat,
    },
    inventoryId: {
      type: GraphQLInt,
    },
    chequeId: {
      type: GraphQLInt,
    },
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    batchId: {
      type: GraphQLNonNull(GraphQLInt),
    },
    authorizedDealerNumber: {
      type: GraphQLString,
    },
    registerNumber: {
      type: GraphQLInt,
    },
    stornoCancelledTransactionId: {
      type: GraphQLInt,
    },
    branch: {
      type: GraphQLInt, // NonNull? Enum  type?
    },
    description: {
      type: GraphQLString,
    },
    linkedFile: {
      type: GraphQLString,
    },
    costingCode: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    branchName: {
      type: GraphQLString,
    },
    costingCodeName: {
      type: GraphQLString,
    },
    batch: {
      type: type.BatchType,
      resolve: (transaction) => {
        return resolver.batchById(transaction.batchId);
      },
    },
    debtor: {
      type: type.AccountType,
      resolve: (transaction) => {
        return resolver.accountById(transaction.debtorId);
      },
    },
    creditor: {
      type: type.AccountType,
      resolve: (transaction) => {
        return resolver.accountById(transaction.creditorId);
      },
    },
    records: {
      type: GraphQLList(RecordType),
      resolve: (transaction) => {
        return resolver.recordsByTransactionId(transaction.id);
      },
    },
  }),
});

const PostTransactionsResponseWithoutErrors = new GraphQLObjectType({
  name: "PostTransactionsResponsWithoutErrors",
  description: "Response for Posting Transactions to a Batch",
  fields: () => ({
    status: {
      type: GraphQLString,
    },
    batch_issue: {
      type: GraphQLString,
    },
    batch_check: {
      type: GraphQLString,
    },
    newbatch: {
      type: GraphQLInt,
    },
    batchno: {
      type: GraphQLInt,
    },
    batch_id: {
      type: GraphQLInt,
      resolve: (res) => {
        return res.newbatch || res.batchno;
      },
    },
    errors: {
      type: GraphQLString,
    },
    batch: {
      type: type.BatchType,
      resolve: (res) => {
        return resolver.batchById(res.newbatch || res.batchno);
      },
    },
  }),
});

const PostTransactionsResponseWithErrors = new GraphQLObjectType({
  name: "PostTransactionsResponsWithErrors",
  description: "Response for Posting Transactions to a Batch",
  fields: () => ({
    status: {
      type: GraphQLString,
    },
    batch_issue: {
      type: GraphQLString,
    },
    batch_check: {
      type: GraphQLString,
    },
    newbatch: {
      type: GraphQLInt,
    },
    batchno: {
      type: GraphQLInt,
    },
    batch_id: {
      type: GraphQLInt,
      resolve: (res) => {
        return res.newbatch || res.batchno;
      },
    },
    errors: {
      type: GraphQLList(type.recordErrorType),
    },
    batch: {
      type: type.BatchType,
      resolve: (res) => {
        return resolver.batchById(res.newbatch || res.batchno);
      },
    },
  }),
});

const PostTransactionsResponseType = new GraphQLUnionType({
  name: "PostTransactionsResponse",
  description: "Response for Posting Transactions to a Batch",
  types: [
    PostTransactionsResponseWithoutErrors,
    PostTransactionsResponseWithErrors,
  ],
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
    branch: {
      type: GraphQLInt,
    },
    costingCode: {
      type: GraphQLString,
    },
    creditorName: {
      type: GraphQLString,
    },
    currencyCode: {
      type: GraphQLString,
    },
    date3: {
      type: GraphQLString,
    },
    debtorName: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    details2: {
      type: GraphQLString,
    },
    details1: {
      type: GraphQLString,
    },
    dueDate: {
      type: GraphQLString,
    },
    authorizedDealerNumber: {
      type: GraphQLString,
    },
    quantity: {
      type: GraphQLFloat,
    },
    reference1: {
      type: GraphQLInt,
    },
    reference2: {
      type: GraphQLInt,
    },
    reference3: {
      type: GraphQLInt,
    },
    shekelSum: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    foreignCurrencySum: {
      type: GraphQLFloat,
    },
    creditorId: {
      type: GraphQLNonNull(GraphQLString),
    },
    debtorId: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLString,
    },
    valueDate: {
      type: GraphQLString,
    },
    records: {
      type: GraphQLList(PostRecord),
    },
  }),
});

const PostRecord = new GraphQLInputObjectType({
  name: "PostRecord",
  description: "Interface for posting new Record",
  fields: () => ({
    accountId: {
      type: GraphQLNonNull(GraphQLString),
    },
    debit_orCreditNumber: {
      type: GraphQLNonNull(GraphQLString),
    },
    shekelSum: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    foreignCurrencySum: {
      type: GraphQLFloat,
    },
  }),
});

export {
  RecordType,
  TransactionType,
  PostTransactionsResponseType,
  PostTransaction,
};
