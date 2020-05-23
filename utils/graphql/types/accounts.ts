import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
} from "graphql";

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

export { AccountType };
