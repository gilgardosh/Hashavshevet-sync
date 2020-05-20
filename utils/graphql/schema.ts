import * as fs from "fs";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  printSchema,
  graphql,
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
  getAllTransactions,
  transactionByIdLoader,
  getAllBatches,
  batchByIdLoader,
  getAllAccounts,
  accountByIdLoader,
  getAllBankPageRecords,
  bankPageRecordByIdLoader,
  getAllBankPages,
  bankPageByIdLoader,
} from "../wizcloudProccess/getFormData";

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
        return await recordByIdLoader.load(args.id);
      },
    },
    records: {
      type: GraphQLList(RecordType),
      description: "List of All Records",
      resolve: async () => {
        return await getAllRecords();
      },
    },
    transactionById: {
      type: TransactionType,
      description: "A Single Transaction by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        return await transactionByIdLoader.load(args.id);
      },
    },
    transactions: {
      type: GraphQLList(TransactionType),
      description: "List of All Transactions",
      resolve: async () => {
        return await getAllTransactions();
      },
    },
    batchById: {
      type: BatchType,
      description: "A Single Batch by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        return await batchByIdLoader.load(args.id);
      },
    },
    batches: {
      type: GraphQLList(BatchType),
      description: "List of All Batches",
      resolve: async () => {
        return await getAllBatches();
      },
    },
    accountById: {
      type: AccountType,
      description: "A Single Account by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        return await accountByIdLoader.load(args.id);
      },
    },
    accounts: {
      type: GraphQLList(AccountType),
      description: "List of All Accounts",
      resolve: async () => {
        return await getAllAccounts();
      },
    },
    bankPageRecordById: {
      type: BankPageRecordType,
      description: "A Single Bank Page Record by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        return await bankPageRecordByIdLoader.load(args.id);
      },
    },
    bankPageRecords: {
      type: GraphQLList(BankPageRecordType),
      resolve: async () => {
        return await getAllBankPageRecords();
      },
    },
    bankPageById: {
      type: BankPageType,
      description:
        "A Single Bank Page (Which Is A List Of Bank Page Records), by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        return await bankPageByIdLoader.load(args.id);
      },
    },
    bankPages: {
      type: GraphQLList(BankPageType),
      description: "List Of Bank Pages",
      resolve: async () => {
        return await getAllBankPages();
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
