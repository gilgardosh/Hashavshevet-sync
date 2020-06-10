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
    sortGroup: {
      type: GraphQLInt, // Enum type?
    },
    sector: {
      type: GraphQLString, // NonNull?
    },
    details: {
      type: GraphQLString,
    },
    initDate: {
      type: GraphQLString, // Date type
    },
    type: {
      type: GraphQLString, // Enum type? NonNull?
    },
    isActive: {
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
    balanceCode: {
      type: GraphQLString, // NonNull?
    },
    generalDiscountPercent: {
      type: GraphQLFloat,
    },
    vatExempt: {
      type: GraphQLString, // Enum type, NonNull
    },
    occupation: {
      type: GraphQLString,
    },
    agent: {
      type: GraphQLInt,
    },
    withholdingPercent: {
      type: GraphQLFloat,
    },
    withholdingValidity: {
      type: GraphQLString, // Date type. NonNull?
    },
    bankId: {
      type: GraphQLString,
    },
    bankBranchId: {
      type: GraphQLString,
    },
    bankAccountId: {
      type: GraphQLString,
    },
    authorizedDealerNumber: {
      type: GraphQLString,
    },
    mainAccount: {
      type: GraphQLString, // NonNull?
    },
    maxCredit: {
      type: GraphQLFloat,
    },
    maxCreditCurrency: {
      type: GraphQLString, // Enum type? NonNull?
    },
    maxObligo: {
      type: GraphQLFloat,
    },
    maxObligoCurrency: {
      type: GraphQLString, // Enum type? NonNull?
    },
    incomeFileNumber: {
      type: GraphQLString,
    },
    centralAccount: {
      type: GraphQLString,
    },
    accountantTransfer: {
      type: GraphQLString,
    },
    costingCode: {
      type: GraphQLString,
    },
  }),
});

export { AccountType };
