import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
} from "graphql";
import { getRecords, getTransactions, getBatches, getAccounts } from "../wizcloudProccess/getFormData";

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
      resolve: async (record) => {
        let transactionsList;
        await getTransactions().then(
          (data) => (transactionsList = data)
        );
        return transactionsList.find((transaction) => transaction.id === record.transaction_id);
      },
    },
    batch: {
      type: BatchType,
      resolve: async (record) => {
        let batchesList;
        await getBatches().then(
          (data) => (batchesList = data)
        );
        return batchesList.find((batch) => batch.id === record.batch_id);
      },
    },
    account: {
      type: AccountType,
      resolve: async (record) => {
        let accountsList;
        await getAccounts().then(
          (data) => (accountsList = data)
        );
        return accountsList.find(
          (account) => account.id === record.account_id
        );
      },
    },
    counter_account: {
      type: AccountType,
      resolve: async (record) => {
        let accountsList;
        await getAccounts().then(
          (data) => (accountsList = data)
        );
        return accountsList.find(
          (account) => account.id === record.counter_account_id
        );
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
      type: BatchType,
      resolve: async (transaction) => {
        let batchesList;
        await getBatches().then(
          (data) => (batchesList = data)
        );
        return batchesList.find((batch) => batch.id === transaction.batch_id);
      },
    },
    debtor: {
      type: AccountType,
      resolve: async (transaction) => {
        let accountsList;
        await getAccounts().then(
          (data) => (accountsList = data)
        );
        return accountsList.find((account) => account.id === transaction.debtor_id);
      },
    },
    creditor: {
      type: AccountType,
      resolve: async (transaction) => {
        let accountsList;
        await getAccounts().then(
          (data) => (accountsList = data)
        );
        return accountsList.find((account) => account.id === transaction.creditor_id);
      },
    },
    records: {
      type: GraphQLList(RecordType),
      resolve: async (transaction) => {
        let recordsList;
        await getRecords().then(
          (data) => (recordsList = data)
        );
        return recordsList.filter(
          (record) => record.transaction_id === transaction.id
        );
      },
    },
  }),
});

const BatchType = new GraphQLObjectType({
  name: "Batch",
  description: "A Single Batch",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    type: {
      type: GraphQLString, // Enum type? NonNull?
    },
    status: {
      type: GraphQLString, // Enum type? NonNull?
    },
    issue_date: {
      type: GraphQLString, // Date type
    },
    details: {
      type: GraphQLString,
    },
    init_time: {
      type: GraphQLString,
    },
    init_date: {
      type: GraphQLString, // Date type
    },
    transactions: {
      type: GraphQLList(TransactionType),
      resolve: async (batch) => {
        let transactionsList;
        await getTransactions().then(
          (data) => (transactionsList = data)
        );
        return transactionsList.filter((transaction) => transaction.batch_id === batch.id);
      },
    },
    records: {
      type: GraphQLList(RecordType),
      resolve: async (batch) => {
        let recordsList;
        await getRecords().then(
          (data) => (recordsList = data)
        );
        return recordsList.filter(
          (record) => record.batch_id === batch.id
        );
      },
    },
  }),
});

const AccountType = new GraphQLObjectType({
  name: "Account",
  description: "A Single Account",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLString,
    },
    sort_group: {
      type: GraphQLInt, // Enum type?
    },
    sector: {
      type: GraphQLString, // NonNull?
    },
    details: {
      type: GraphQLString,
    },
    init_date: {
      type: GraphQLString, // Date type
    },
    type: {
      type: GraphQLString, // Enum type? NonNull?
    },
    is_active: {
      type: GraphQLString, // Enum type? NonNull?
    },
    address: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    zipcode: {
      type: GraphQLString,
    },
    country: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    cellphone: {
      type: GraphQLString,
    },
    fax: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    balance_code: {
      type: GraphQLString, // NonNull?
    },
    general_discount_percent: {
      type: GraphQLFloat,
    },
    vat_exempt: {
      type: GraphQLString, // Enum type, NonNull
    },
    occupation: {
      type: GraphQLString,
    },
    agent: {
      type: GraphQLInt,
    },
    withholding_percent: {
      type: GraphQLFloat,
    },
    withholding_validity: {
      type: GraphQLString, // Date type. NonNull?
    },
    bank_id: {
      type: GraphQLString,
    },
    bank_branch_id: {
      type: GraphQLString,
    },
    bank_account_id: {
      type: GraphQLString,
    },
    authorized_dealer_number: {
      type: GraphQLString,
    },
    main_account: {
      type: GraphQLString, // NonNull?
    },
    max_credit: {
      type: GraphQLFloat,
    },
    max_credit_currency: {
      type: GraphQLString, // Enum type? NonNull?
    },
    max_obligo: {
      type: GraphQLFloat,
    },
    max_obligo_currency: {
      type: GraphQLString, // Enum type? NonNull?
    },
    income_file_number: {
      type: GraphQLString,
    },
    central_account: {
      type: GraphQLString,
    },
    accountant_transfer: {
      type: GraphQLString,
    },
    costing_code: {
      type: GraphQLString,
    },
  }),
});

export { RecordType, TransactionType, BatchType, AccountType };
