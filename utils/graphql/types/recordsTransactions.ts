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
    date3: {
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

const PostTransactionsResponseFields = {
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
  batchId: {
    type: GraphQLInt,
    resolve: (res) => {
      return res.newbatch || res.batchno;
    },
  },
  batch: {
    type: type.BatchType,
    resolve: (res) => {
      return resolver.batchById({id: res.newbatch || res.batchno});
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
      type: GraphQLList(type.recordErrorType),
      description: "errors list",
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
      description: "Main credit account key (max 15 charactes)", // TODO: create validation
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
      description: "Main debit account key (max 15 charactes)", // TODO: create validation
    },
    debtorName: {
      type: GraphQLString,
      description: "Name of the main debit account (max 50 characters)", // TODO: create validation
    },
    description: {
      type: GraphQLString,
      description: "Description (max 250 characters)", // TODO: create validation
    },
    details2: {
      type: GraphQLString,
      description: "Additional remarks (max 50 characters)", // TODO: create validation
    },
    details1: {
      type: GraphQLString,
      description: "Remarks (max 50 characters)", // TODO: create validation
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
      description: "Account key (max 15 characters)", // TODO: create validation
    },
    debitOrCreditNumber: {
      type: GraphQLNonNull(debitOrCreditNumber),
      description: "Credit/Debit",
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

const debitOrCreditNumber = new GraphQLEnumType({
  name: "debitOrCreditNumber",
  description: "Credit/Debit",
  values: {
    Credit: {
      value: 0,
    },
    Debit: {
      value: 1,
    },
  },
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
