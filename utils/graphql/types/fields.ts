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
  description: "Account name (max 50 characters)", // TODO: add varification
};
const accountType = {
  type: GraphQLString, // TODO: Enum type? NonNull?
  description: "Type of account",
};
const address = {
  type: GraphQLString,
  description: "Address (max 50 characters)",// TODO: add validation
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
const city = {
  type: GraphQLString,
  description: "City (max 20 characters)",// TODO: add validation
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
      value: 1,
    },
    Debit: {
      value: -1,
    },
  },
});
const debitOrCreditNumber = {
  type: debitOrCreditNumberEnum,
  description: "Credit / Debit",
};
const details1 = {
  type: GraphQLString,
  description: "Remarks (max 50 characters)", // TODO: add varification
};
const filter = {
  type: GraphQLString, // TODO: NonNull? add varification
  description: "Filtering (5 characters)",
};
const initDate = {
  type: GraphQLString, // TODO: Date type
  description: "Initiate date",
};
const isActive = {
  type: GraphQLString, // TODO: Enum type? NonNull?
  description: "Active/inactive account",
}
const matchNumber = {
  type: GraphQLInt,
  description: "Match number",
};
const reference1 = {
  type: GraphQLInt,
  description: "Reference",
};
const sortGroup = {
  type: GraphQLInt, // TODO: Enum type?
  description: "Sorting code",
};
const sum = {
  type: GraphQLFloat,
  description: "Total ammount",
};
const zipcode = {
  type: GraphQLString,
  description: "Zip code (max 10 characters)",// TODO: add validation
};

export {
  accountId,
  accountName,
  accountType,
  address,
  adjustedRecord,
  bankPageId,
  bankPageRecordId,
  city,
  cumulativeBalance,
  cumulativeBalanceCalculated,
  date,
  debitOrCreditName,
  debitOrCreditNumber,
  debitOrCreditNumberEnum,
  details1,
  filter,
  initDate,
  isActive,
  matchNumber,
  reference1,
  sortGroup,
  sum,
  zipcode,
};
