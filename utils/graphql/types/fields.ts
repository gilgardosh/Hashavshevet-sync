import {
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLEnumType,
} from "graphql";

const accountId = {
  type: GraphQLString,
  description: "Account identifier",
};
const accountName = {
  type: GraphQLString,
  description: "Account name",
};
const adjustedRecord = {
  type: GraphQLString,
  description: "Adjusted record",
};
const bankPageId = {
  type: GraphQLInt,
  description: "Bank page identifier",
};
const bankPageRecordId = {
  type: GraphQLInt,
  description: "Bank page record identifier",
};
const cumulativeBalance = {
  type: GraphQLFloat,
  description: "Cumulative balance",
};
const cumulativeBalanceCalculated = {
  type: GraphQLFloat,
  description: "Calculated cumulative balance",
};
const date = {
  type: GraphQLString, // TODO: Date type
  description: "Date",
};
const debitOrCreditName = {
  type: GraphQLString,
  description: "Credit / Debit",
};
const debitOrCreditNumberEnum = new GraphQLEnumType({
  name: "debitOrCreditNumber",
  description: "Credit / Debit",
  values: {
    Credit: {
      value: -1,
    },
    Debit: {
      value: 1,
    },
  },
});
const debitOrCreditNumber = {
  type: debitOrCreditNumberEnum,
  description: "Credit / Debit",
};
const details1 = {
  type: GraphQLString,
  description: "Remarks (max 50 characters)",  // TODO: add varification
};
const matchNumber = {
  type: GraphQLInt,
  description: "Match number",
};
const reference1 = {
  type: GraphQLInt,
  description: "Reference",
};
const sum = {
  type: GraphQLFloat,
  description: "Total ammount",
};

export {
  accountId,
  accountName,
  adjustedRecord,
  bankPageId,
  bankPageRecordId,
  cumulativeBalance,
  cumulativeBalanceCalculated,
  date,
  debitOrCreditName,
  debitOrCreditNumber,
  debitOrCreditNumberEnum,
  details1,
  matchNumber,
  reference1,
  sum,
};
