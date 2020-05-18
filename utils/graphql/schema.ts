import * as fs from "fs";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  printSchema,
} from "graphql";
import { TransactionType, TitleType, BatchType, AccountType } from "./types";

const transactionsList = [];
const titlesList = [];
const batchesList = [];
const accountsList = [];

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    transactionById: {
      type: TransactionType,
      description: "A Single Transaction by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resole: (_, args) =>
        transactionsList.find((trans) => trans.id === args.id),
    },
    transactions: {
      type: GraphQLList(TransactionType),
      description: "List of All Transactions",
      resolve: () => transactionsList,
    },
    titleById: {
      type: TitleType,
      description: "A Single Title by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resole: (_, args) => titlesList.find((title) => title.id === args.id),
    },
    titles: {
      type: GraphQLList(TitleType),
      description: "List of All Titles",
      resolve: () => titlesList,
    },
    batchById: {
      type: BatchType,
      description: "A Single Batch by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resole: (_, args) => batchesList.find((batch) => batch.id === args.id),
    },
    batchs: {
      type: GraphQLList(BatchType),
      description: "List of All Batchs",
      resolve: () => batchesList,
    },
    accountById: {
      type: AccountType,
      description: "A Single Account by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resole: (_, args) =>
        accountsList.find((account) => account.id === args.id),
    },
    accounts: {
      type: GraphQLList(AccountType),
      description: "List of All Accounts",
      resolve: () => accountsList,
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  //   mutation: RootMutationType,
});

function createSDL() {
  const dataForSDL = printSchema(schema);
  fs.writeFile(`SDL.graphql`, dataForSDL, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      console.log(err);
    }
  });
}

export { schema, createSDL };
