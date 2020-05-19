import * as fs from "fs";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  printSchema,
} from "graphql";
import { RecordType, TransactionType, BatchType, AccountType } from "./types";
import { getRecords, getTransactions, getBatches, getAccounts } from "../wizcloudProccess/getFormData";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    recordById: {
      type: RecordType,
      description: "A Single Record by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        let recordsList;
        await getRecords().then(
          (data) => (recordsList = data)
        );
        return recordsList.find((record) => record.id === args.id);
      },
    },
    records: {
      type: GraphQLList(RecordType),
      description: "List of All Records",
      resolve: async () => {
        let recordsList;
        await getRecords().then(
          (data) => (recordsList = data)
        );
        return recordsList;
      },
    },
    transactionById: {
      type: TransactionType,
      description: "A Single Transaction by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        let transactionsList;
        await getTransactions().then(
          (data) => (transactionsList = data)
        );
        return transactionsList.find((transaction) => transaction.id === args.id);
      },
    },
    transactions: {
      type: GraphQLList(TransactionType),
      description: "List of All Transactions",
      resolve: async () => {
        let transactionsList;
        await getTransactions().then(
          (data) => (transactionsList = data)
        );
        return transactionsList;
      },
    },
    batchById: {
      type: BatchType,
      description: "A Single Batch by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        let batchesList;
        await getBatches().then(
          (data) => (batchesList = data)
        );
        return batchesList.find((batch) => batch.id === args.id);
      },
    },
    batchs: {
      type: GraphQLList(BatchType),
      description: "List of All Batchs",
      resolve: async () => {
        let batchesList;
        await getBatches().then(
          (data) => (batchesList = data)
        );
        return batchesList;
      },
    },
    accountById: {
      type: AccountType,
      description: "A Single Account by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        let accountsList;
        await getAccounts().then(
          (data) => (accountsList = data)
        );
        return accountsList.find((account) => account.id === args.id);
      },
    },
    accounts: {
      type: GraphQLList(AccountType),
      description: "List of All Accounts",
      resolve: async () => {
        let accountsList;
        await getAccounts().then(
          (data) => (accountsList = data)
        );
        return accountsList;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  //   mutation: RootMutationType,
});

function createSDL() {
  const dataForSDL = printSchema(schema);
  fs.writeFile(`./utils/graphql/SDL.graphql`, dataForSDL, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      console.log(err);
    }
  });
}

export { schema, createSDL };
