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
      description: "",
    },
    name: {
      type: GraphQLString,
      description: "",
    },
    sortGroup: {
      type: GraphQLInt, // TODO: Enum type?
      description: "",      
    },
    sector: {
      type: GraphQLString, // TODO: NonNull?
      description: "",
    },
    details: {
      type: GraphQLString,
      description: "",
    },
    initDate: {
      type: GraphQLString, // TODO: Date type
      description: "",
    },
    type: {
      type: GraphQLString, // TODO: Enum type? NonNull?
      description: "",
    },
    isActive: {
      type: GraphQLString, // TODO: Enum type? NonNull?
      description: "",
    },
    address: {
      type: GraphQLString,
      description: "",
    },
    city: {
      type: GraphQLString,
      description: "",
    },
    zipcode: {
      type: GraphQLString,
      description: "",
    },
    country: {
      type: GraphQLString,
      description: "",
    },
    phone: {
      type: GraphQLString,
      description: "",
    },
    cellphone: {
      type: GraphQLString,
      description: "",
    },
    fax: {
      type: GraphQLString,
      description: "",
    },
    email: {
      type: GraphQLString,
      description: "",
    },
    balanceCode: {
      type: GraphQLString, // TODO: NonNull?
      description: "",
    },
    generalDiscountPercent: {
      type: GraphQLFloat,
      description: "",
    },
    vatExempt: {
      type: GraphQLString, // TODO: Enum type, NonNull
      description: "",
    },
    occupation: {
      type: GraphQLString,
      description: "",
    },
    agent: {
      type: GraphQLInt,
      description: "",
    },
    withholdingPercent: {
      type: GraphQLFloat,
      description: "",
    },
    withholdingValidity: {
      type: GraphQLString, // TODO: Date type. NonNull?
      description: "",
    },
    bankId: {
      type: GraphQLString,
      description: "",
    },
    bankBranchId: {
      type: GraphQLString,
      description: "",
    },
    bankAccountId: {
      type: GraphQLString,
      description: "",
    },
    authorizedDealerNumber: {
      type: GraphQLString,
      description: "",
    },
    mainAccount: {
      type: GraphQLString, // TODO: NonNull?
      description: "",
    },
    maxCredit: {
      type: GraphQLFloat,
      description: "",
    },
    maxCreditCurrency: {
      type: GraphQLString, // TODO: Enum type? NonNull?
      description: "",
    },
    maxObligo: {
      type: GraphQLFloat,
      description: "",
    },
    maxObligoCurrency: {
      type: GraphQLString, // TODO: Enum type? NonNull?
      description: "",
    },
    incomeFileNumber: {
      type: GraphQLString,
      description: "",
    },
    centralAccount: {
      type: GraphQLString,
      description: "",
    },
    accountantTransfer: {
      type: GraphQLString,
      description: "",
    },
    costingCode: {
      type: GraphQLString,
      description: "",
    },
  }),
});

export { AccountType };
