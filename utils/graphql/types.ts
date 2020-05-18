import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
} from "graphql";

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  description: "A Single Transaction",
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
    transaction_id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    account_id: {
      type: GraphQLNonNull(GraphQLString),
    },
    counter_account_name: {
      type: GraphQLString,
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
    shekel_sum_closed_in_transaction: {
      type: GraphQLFloat,
    },
    shekel_sum_open_in_transaction: {
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
    shekel_cumulative_balance_by_sectionsum: {
      type: GraphQLFloat,
    },
    cumulative_balance_by_sort_key: {
      type: GraphQLFloat,
    },
    cumulative_balance_of_open_sum_in_transaction: {
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
    foreign_currency_sum_closed_in_transaction: {
      type: GraphQLFloat,
    },
    foreign_currency_sun_open_in_transaction: {
      type: GraphQLFloat,
    },
    estimated_sum: {
      type: GraphQLFloat,
    },
    transaction_title_id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    batch_id: {
      type: GraphQLNonNull(GraphQLInt),
    },
  }),
});

const TitleType = new GraphQLObjectType({
  name: "Transactions Title",
  description: "A Title of Some Transactions",
  fields: () => ({
    debtor_id: {
      type: GraphQLString,
    },
    creditor_id: {
      type: GraphQLString,
    },
    type: {
        type: GraphQLString,    // Enum?
    },
    currency_code: {
        type: GraphQLString,    // Enum?
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
        type: GraphQLString,    // Date
    },
    due_date: {
        type: GraphQLString,    // Date
    },
    details1: {
        type: GraphQLString,
    },
    details2: {
        type: GraphQLString,
    },
    exchange_rate_differences: {
        type: GraphQLString,    // Enum, perhaps NonNull
    },
    costing_code_slice: {
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
    title_id: {
        type: GraphQLNonNull(GraphQLInt),
    },
    batch_id: {
        type: GraphQLNonNull(GraphQLInt),
    },
    osek874: {
        type: GraphQLString,
    },
    register_number: {
        type: GraphQLInt,
    },
    storno_cancelled_transaction_id: {
        type: GraphQLInt,
    },
    branch: {
        type: GraphQLInt,   // NonNull? Enum?
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
  }),
});

export { TransactionType };

GraphQLFloat;
