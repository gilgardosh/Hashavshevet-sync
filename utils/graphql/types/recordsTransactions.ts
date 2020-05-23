import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLUnionType,
} from "graphql";
import * as resolver from "../resolvers";
import * as type from "../types";

const RecordType = new GraphQLObjectType({
  name: "Record",
  description: "A Single Record",
  fields: () => ({
    AccountKey: {
      type: GraphQLNonNull(GraphQLString),
    },
    DebitCredit: {
      type: GraphQLNonNull(GraphQLString),
    },
    SuF: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    SuFDlr: {
      type: GraphQLFloat,
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

const addTransactionsResponsWithoutErrors = new GraphQLObjectType({
  name: "addTransactionsResponsWithoutErrors",
  description: "Response for Adding Transactions to a Batch",
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

const addTransactionsResponsWithErrors = new GraphQLObjectType({
  name: "addTransactionsResponsWithErrors",
  description: "Response for Adding Transactions to a Batch",
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

const addTransactionsResponsType = new GraphQLUnionType({
  name: "AddTransactionsResponse",
  description: "Response for Adding Transactions to a Batch",
  types: [
    addTransactionsResponsWithoutErrors,
    addTransactionsResponsWithErrors,
  ],
  resolveType: (data) => {
    if (typeof data.errors === "string" || typeof data.errors === "undefined") {
      return addTransactionsResponsWithoutErrors;
    } else if (typeof data.errors === "object") {
      return addTransactionsResponsWithErrors;
    }
  },
});

export { RecordType, TransactionType, addTransactionsResponsType };
