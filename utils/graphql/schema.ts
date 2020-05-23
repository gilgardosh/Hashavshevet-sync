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
  BatchErrorType,
  NewBatchType,
  IssueBatchType,
  AccountType,
  BankPageRecordType,
  BankPageType,
  CompanyType,
  UserType,
} from "./types";
import * as resolver from "./resolvers";
import * as hashavshevet from "../wizcloudProccess/wizCloudFetch";

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
        return resolver.recordById(args.id);
      },
    },
    records: {
      type: GraphQLList(RecordType),
      description: "List of All Records",
      resolve: () => {
        return resolver.allRecords();
      },
    },
    transactionById: {
      type: TransactionType,
      description: "A Single Transaction by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return resolver.transactionById(args.id);
      },
    },
    transactions: {
      type: GraphQLList(TransactionType),
      description: "List of All Transactions",
      resolve: () => {
        return resolver.allTransactions();
      },
    },
    batchById: {
      type: BatchType,
      description: "A Single Batch by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return resolver.batchById(args.id);
      },
    },
    batches: {
      type: GraphQLList(BatchType),
      description: "List of All Batches",
      resolve: () => {
        return resolver.allBatches();
      },
    },
    accountById: {
      type: AccountType,
      description: "A Single Account by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return resolver.accountById(args.id);
      },
    },
    accounts: {
      type: GraphQLList(AccountType),
      description: "List of All Accounts",
      resolve: () => {
        return resolver.allAccounts();
      },
    },
    bankPageRecordById: {
      type: BankPageRecordType,
      description: "A Single Bank Page Record by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return resolver.bankPageRecordById(args.id);
      },
    },
    bankPageRecords: {
      type: GraphQLList(BankPageRecordType),
      description: "List of All Bank Page Records",
      resolve: () => {
        return resolver.allBankPageRecords();
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
        return resolver.bankPageById(args.id);
      },
    },
    bankPages: {
      type: GraphQLList(BankPageType),
      description: "List Of Bank Pages",
      resolve: () => {
        return resolver.allBankPages();
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    userCompanies: {
      type: GraphQLList(CompanyType),
      description:
        "List of Companies for user token thats defined on: 'WizcloudApiPrivateKey'",
      resolve: () => {
        return hashavshevet.getCompanies();
      },
    },
    userDetails: {
      type: UserType,
      description: "Get User Details",
      resolve: () => {
        return hashavshevet.napi();
      },
    },
    checkBatch: {
      type: BatchErrorType,
      description: "Checks if there are errors in the batch",
      args: {
        batch_id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return hashavshevet.checkBatch({ batchNo: args.batch_id });
      },
    },
    newBatch: {
      type: NewBatchType,
      description: "Opens a new batch and return the number",
      resolve: () => {
        return hashavshevet.newBatch();
      },
    },
    issueBatch: {
      type: IssueBatchType,
      description: "Checks and inputs the temporary batch into the permanent storage",
      args: {
        batch_id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return hashavshevet.issueBatch({ batchNo: args.batch_id });
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
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
