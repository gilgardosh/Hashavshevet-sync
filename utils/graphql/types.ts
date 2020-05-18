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

export { TransactionType };

GraphQLFloat;
