import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from "graphql";
import * as resolver from "../resolvers";
import * as type from "../types";

const BankPageRecordType = new GraphQLObjectType({
  name: "BankPageRecord",
  description: "A Single Bank Page Record",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    bankPageId: {
      type: GraphQLNonNull(GraphQLInt),
    },
    reference: {
      type: GraphQLInt,
    },
    debitOrCredit: {
      type: GraphQLNonNull(GraphQLString),
    },
    cumulativeBalance: {
      type: GraphQLFloat,
    },
    cumulativeBalanceCalculated: {
      type: GraphQLFloat,
    },
    matchNumber: {
      type: GraphQLInt,
    },
    accountId: {
      type: GraphQLString,
    },
    sum: {
      type: GraphQLFloat,
    },
    details: {
      type: GraphQLString,
    },
    accountName: {
      type: GraphQLString, // remove?
    },
    date: {
      type: GraphQLString, // Date type
    },
    adjustedRecord: {
      type: GraphQLString,
    },
    bankPage: {
      type: BankPageType,
      resolve: (record) => {
        return resolver.bankPageById(record.bank_page_id);
      },
    },
    account: {
      type: type.AccountType,
      resolve: (record) => {
        return resolver.accountById(record.account_id);
      },
    },
  }),
});

const BankPageType = new GraphQLObjectType({
  name: "BankPage",
  description:
    "A Single BA Single Bank Page (Which Is A List Of Bank Page Records)atch",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    bankPageRecords: {
      type: GraphQLList(BankPageRecordType),
      resolve: (page) => {
        return resolver.bankPageRecordsByBankPageId(page.id);
      },
    },
  }),
});

const BankErrorType = new GraphQLObjectType({
  name: "BankError",
  fields: () => ({
    index: {
      type: GraphQLInt,
    },
    err: {
      type: GraphQLString,
    },
  }),
});

const PostBankPageRecord = new GraphQLInputObjectType({
  name: "PostBankPageRecord",
  description: "Interface for posting new Bank Page Record",
  fields: () => ({
    AccountKey: {
      type: GraphQLNonNull(GraphQLString),
    },
    Reference: {
      type: GraphQLInt,
    },
    CreditDebit: {
      type: GraphQLNonNull(GraphQLInt),
    },
    SuF: {
      type: GraphQLNonNull(GraphQLInt),
    },
    Details: {
      type: GraphQLString,
    },
  })
})

const PostBankPageResponseType = new GraphQLObjectType({
  name: "PostBankPageResponse",
  fields: () => ({
    status: {
      type: GraphQLString,
    },
    errors: {
      type: GraphQLList(BankErrorType),
    },
  }),
});

export { BankPageRecordType, BankPageType, PostBankPageRecord, PostBankPageResponseType };
