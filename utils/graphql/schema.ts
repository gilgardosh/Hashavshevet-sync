import * as fs from "fs";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  printSchema,
} from "graphql";
import {
  RecordType,
  TransactionType,
  BatchType,
  AccountType,
  BankPageRecordType,
  BankPageType,
} from "./types";
import {
  getAllRecords,
  recordByIdLoader,
} from "../wizcloudProccess/getRecords";
import {
  getAllTransactions,
  transactionByIdLoader,
} from "../wizcloudProccess/getTransactions";
import { getAllBatches, batchByIdLoader } from "../wizcloudProccess/getBatches";
import {
  getAllAccounts,
  accountByIdLoader,
} from "../wizcloudProccess/getAccounts";
import {
  getAllBankPageRecords,
  bankPageRecordByIdLoader,
} from "../wizcloudProccess/getBankPageRecords";
import {
  getAllBankPages,
  bankPageByIdLoader,
} from "../wizcloudProccess/getBankPages";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    recordById: {
      type: RecordType,
      description: "A Single Record by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return recordByIdLoader.load(args.id);
      },
    },
    records: {
      type: GraphQLList(RecordType),
      description: "List of All Records",
      resolve: () => {
        return getAllRecords();
      },
    },
    transactionById: {
      type: TransactionType,
      description: "A Single Transaction by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return transactionByIdLoader.load(args.id);
      },
    },
    transactions: {
      type: GraphQLList(TransactionType),
      description: "List of All Transactions",
      resolve: () => {
        return getAllTransactions();
      },
    },
    batchById: {
      type: BatchType,
      description: "A Single Batch by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return batchByIdLoader.load(args.id);
      },
    },
    batches: {
      type: GraphQLList(BatchType),
      description: "List of All Batches",
      resolve: () => {
        return getAllBatches();
      },
    },
    accountById: {
      type: AccountType,
      description: "A Single Account by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return accountByIdLoader.load(args.id);
      },
    },
    accounts: {
      type: GraphQLList(AccountType),
      description: "List of All Accounts",
      resolve: () => {
        return getAllAccounts();
      },
    },
    bankPageRecordById: {
      type: BankPageRecordType,
      description: "A Single Bank Page Record by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return bankPageRecordByIdLoader.load(args.id);
      },
    },
    bankPageRecords: {
      type: GraphQLList(BankPageRecordType),
      resolve: () => {
        return getAllBankPageRecords();
      },
    },
    bankPageById: {
      type: BankPageType,
      description:
        "A Single Bank Page (Which Is A List Of Bank Page Records), by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return bankPageByIdLoader.load(args.id);
      },
    },
    bankPages: {
      type: GraphQLList(BankPageType),
      description: "List Of Bank Pages",
      resolve: () => {
        return getAllBankPages();
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({}),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: RootMutationType,
});

function createSDL() {
  const dataForSDL = printSchema(schema);
  fs.writeFile(`./utils/graphql/SDL.graphql`, dataForSDL, "utf8", function (
    err
  ) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      console.log(err);
    }
  });
}

export { schema, createSDL };
