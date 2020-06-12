import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from "graphql";
import * as resolver from "../resolvers";
import * as graphqlType from "../types";
import * as field from "./fields"

const BankPageRecordType = new GraphQLObjectType({
  name: "BankPageRecord",
  description: "A Single Bank Page Record",
  fields: () => ({
    account: {
      type: graphqlType.AccountType,
      description: "Main account details",
      resolve: (record) => resolver.accountById(record.accountId),
    },
    accountId: field.accountId,
    accountName: field.accountName,  // TODO: remove?
    adjustedRecord: field.adjustedRecord,
    bankPage: {
      type: BankPageType,
      description: "Bank page details",
      resolve: (record) => resolver.bankPageById(record.bankPageId),
    },
    bankPageId: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Bank page identifier",
    },
    cumulativeBalance: field.cumulativeBalance,
    cumulativeBalanceCalculated: field.cumulativeBalanceCalculated,
    debitOrCredit: field.debitOrCreditName,
    details: field.details1,
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Bank page record identifier",
    },
    matchNumber: field.matchNumber,
    reference: field.reference1,
    sum: field.sum,
    date: field.date,
  }),
});

const BankPageType = new GraphQLObjectType({
  name: "BankPage",
  description:
    "A Single BA Single Bank Page (Which Is A List Of Bank Page Records)atch",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Bank page identifier",
    },
    bankPageRecords: {
      type: GraphQLList(BankPageRecordType),
      description: "Bank page's records details list",
      resolve: (page) =>  resolver.bankPageRecordsByBankPageId(page.id),
    },
  }),
});

const BankErrorType = new GraphQLObjectType({
  name: "BankError",
  fields: () => ({
    index: {
      type: GraphQLInt,
      description: "Index",
    },
    err: {
      type: GraphQLString,
      description: "Error description",
    },
  }),
});

const PostBankPageRecord = new GraphQLInputObjectType({
  name: "PostBankPageRecord",
  description: "Interface for posting new Bank Page Record",
  fields: () => ({
    AccountKey: {
      type: GraphQLNonNull(GraphQLString),
      description: "Account identifier (max 15 character)", // TODO: add varification
    },
    Reference: field.reference1,
    CreditDebit: {
      type: GraphQLNonNull(field.debitOrCreditNumberEnum),
      description: "Credit / Debit",
    },
    SuF: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Amount",
    },
    Details: field.details1,
  })
})

const PostBankPageResponseType = new GraphQLObjectType({
  name: "PostBankPageResponse",
  fields: () => ({
    status: {
      type: GraphQLString,
      description: "Post proccess status",
    },
    errors: {
      type: GraphQLList(BankErrorType),
      description: "Errors list",
    },
  }),
});

export { BankPageRecordType, BankPageType, PostBankPageRecord, PostBankPageResponseType };
