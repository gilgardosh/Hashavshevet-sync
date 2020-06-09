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
    debit_or_credit: {
      type: GraphQLNonNull(GraphQLString),
    },
    counter_account_id: {
      type: GraphQLString,
    },
    match_number_card_analysis: {
      type: GraphQLInt,
    },
    debit_or_credit_number: {
      type: GraphQLNonNull(GraphQLInt),
    },
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    account_id: {
      type: GraphQLNonNull(GraphQLString),
    },
    counter_account_name: {
      type: GraphQLString, // can be removed
    },
    shekel_credit: {
      type: GraphQLFloat,
    },
    shekel_debit: {
      type: GraphQLFloat,
    },
    shekel_sum: {
      type: GraphQLFloat,
    },
    shekel_sum_closed_in_record: {
      type: GraphQLFloat,
    },
    shekel_sum_open_in_record: {
      type: GraphQLFloat,
    },
    cumulative_balance: {
      type: GraphQLFloat,
    },
    foreign_currency_cumulative_balance_without_opening_balance: {
      type: GraphQLFloat,
    },
    cumulative_balance_without_opening_balance: {
      type: GraphQLFloat,
    },
    shekel_cumulative_balance_by_sector: {
      type: GraphQLFloat,
    },
    cumulative_balance_by_sort_key: {
      type: GraphQLFloat,
    },
    cumulative_balance_of_open_sum_in_record: {
      type: GraphQLFloat,
    },
    foreign_currency_credit: {
      type: GraphQLFloat,
    },
    foreign_currency_debit: {
      type: GraphQLFloat,
    },
    foreign_currency_cumulative_balance: {
      type: GraphQLFloat,
    },
    foreign_currency_sum: {
      type: GraphQLFloat,
    },
    foreign_currency_sum_closed_in_record: {
      type: GraphQLFloat,
    },
    foreign_currency_sun_open_in_record: {
      type: GraphQLFloat,
    },
    estimated_sum: {
      type: GraphQLFloat,
    },
    transaction_id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    batch_id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    transaction: {
      type: TransactionType,
      resolve: (record) => {
        return resolver.transactionById(record.transaction_id);
      },
    },
    batch: {
      type: type.BatchType,
      resolve: (record) => {
        return resolver.batchById(record.batch_id);
      },
    },
    account: {
      type: type.AccountType,
      resolve: (record) => {
        return resolver.accountById(record.account_id);
      },
    },
    counter_account: {
      type: type.AccountType,
      resolve: (record) => {
        return resolver.accountById(record.counter_account_id);
      },
    },
  }),
});

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  description: "A Transaction of Some Records",
  fields: () => ({
    debtor_id: {
      type: GraphQLString,
    },
    creditor_id: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString, // Enum type?
    },
    currency_code: {
      type: GraphQLString, // Enum type?
    },
    foreign_currency_sum: {
      type: GraphQLFloat,
    },
    shekel_sum: {
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
    value_date: {
      type: GraphQLString, // Date type
    },
    due_date: {
      type: GraphQLString, // Date type
    },
    details1: {
      type: GraphQLString,
    },
    details2: {
      type: GraphQLString,
    },
    exchange_rate_differences: {
      type: GraphQLString, // Enum type, perhaps NonNull
    },
    costing_code_sector: {
      type: GraphQLString,
    },
    quantity: {
      type: GraphQLFloat,
    },
    inventory_id: {
      type: GraphQLInt,
    },
    cheque_id: {
      type: GraphQLInt,
    },
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    batch_id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    authorized_dealer_number: {
      type: GraphQLString,
    },
    register_number: {
      type: GraphQLInt,
    },
    storno_cancelled_transaction_id: {
      type: GraphQLInt,
    },
    branch: {
      type: GraphQLInt, // NonNull? Enum  type?
    },
    description: {
      type: GraphQLString,
    },
    linked_file: {
      type: GraphQLString,
    },
    costing_code: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    branch_name: {
      type: GraphQLString,
    },
    costing_code_name: {
      type: GraphQLString,
    },
    batch: {
      type: type.BatchType,
      resolve: (transaction) => {
        return resolver.batchById(transaction.batch_id);
      },
    },
    debtor: {
      type: type.AccountType,
      resolve: (transaction) => {
        return resolver.accountById(transaction.debtor_id);
      },
    },
    creditor: {
      type: type.AccountType,
      resolve: (transaction) => {
        return resolver.accountById(transaction.creditor_id);
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
    costing_code: {
      type: GraphQLString,
    },
    creditor_name: {
      type: GraphQLString,
    },
    currency_code: {
      type: GraphQLString,
    },
    date3: {
      type: GraphQLString,
    },
    debtor_name: {
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
    due_date: {
      type: GraphQLString,
    },
    authorized_dealer_number: {
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
    shekel_sum: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    foreign_currency_sum: {
      type: GraphQLFloat,
    },
    creditor_id: {
      type: GraphQLNonNull(GraphQLString),
    },
    debtor_id: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLString,
    },
    value_date: {
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
    account_id: {
      type: GraphQLNonNull(GraphQLString),
    },
    debit_or_credit_number: {
      type: GraphQLNonNull(GraphQLString),
    },
    shekel_sum: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    foreign_currency_sum: {
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
