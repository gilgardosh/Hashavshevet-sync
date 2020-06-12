import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
} from "graphql";
import * as field from "./fields";

const AccountType = new GraphQLObjectType({
  name: "Account",
  description: "A Single Account",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: "Account identifier (max 15 characters)", // TODO: add varification
    },
    name: field.accountName,
    sortGroup: field.sortGroup,
    filter: field.filter,
    details: field.details1,
    initDate: field.initDate,
    type: field.accountType,
    isActive: field.isActive,
    address: field.address,
    city: field.city,
    zipcode: field.zipcode,
    country: {
      type: GraphQLString,
      description: "Country (max 20 characters)",// TODO: add validation
    },
    phone: {
      type: GraphQLString,
      description: "Phone (max 30 characters)",// TODO: add validation
    },
    cellphone: {
      type: GraphQLString,
      description: "Callphone",
    },
    fax: {
      type: GraphQLString,
      description: "Fax (max 30 characters)",// TODO: add validation
    },
    email: {
      type: GraphQLString,
      description: "Email",
    },
    balanceCode: {
      type: GraphQLString, // TODO: NonNull?
      description: "Code for the balance and profit and loss report",
    },
    generalDiscountPercent: {
      type: GraphQLFloat,
      description: "% customer discount",
    },
    vatExempt: {
      type: GraphQLString, // TODO: Enum type, NonNull
      description: "VAT exempt, 1/0",
    },
    occupation: {
      type: GraphQLString,
      description: "Occupation (max 15 characters)",
    },
    agent: {
      type: GraphQLInt,
      description: "Salesperson",
    },
    withholdingPercent: {
      type: GraphQLFloat,
      description: "% withholding tax",
    },
    withholdingValidity: {
      type: GraphQLString, // TODO: Date type. mm/dd/yyyy NonNull?
      description: "Validity date of the % withholding tax",
    },
    bankId: {
      type: GraphQLString,
      description: "Bank code (max 3 characters)", // TODO: add validation
    },
    bankBranchId: {
      type: GraphQLString,
      description: "Bank branch code (max 5 characters)", // TODO: add validation
    },
    bankAccountId: {
      type: GraphQLString,
      description: "Bank account # (max 20 characters)", // TODO: add validation
    },
    authorizedDealerNumber: {
      type: GraphQLString,
      description: "VAT registration number (max 20 characters)", // TODO: add validation
    },
    mainAccount: {
      type: GraphQLString, // TODO: NonNull? documentation says "INT"
      description: "Code of the main account",
    },
    maxCredit: {
      type: GraphQLFloat,
      description: "Credit limit",
    },
    maxCreditCurrency: {
      type: GraphQLString, // TODO: Enum type? NonNull?
      description: "Credit currency (max 5 characters)",
    },
    maxObligo: {
      type: GraphQLFloat,
      description: "Credit risk limit",
    },
    maxObligoCurrency: {
      type: GraphQLString, // TODO: Enum type? NonNull?
      description: "Credit risk currency (max 5 characters)",
    },
    incomeFileNumber: {
      type: GraphQLString,
      description: "Income file number (max 20 characters)",
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
      description: "Code of cost center (existing code)",
    },
  }),
});

export { AccountType };
