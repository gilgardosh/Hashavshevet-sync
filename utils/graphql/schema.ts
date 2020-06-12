import * as fs from "fs";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  printSchema,
  GraphQLBoolean,
  GraphQLNonNull,
} from "graphql";
import * as graphql from "./types";
import * as type from "./types/types"
import * as resolver from "./resolvers";
import * as hashavshevet from "../wizcloudProccess/wizCloudFetch";
import { PostBankPageRecord } from "./types/bankPages";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    getRecordById: {
      type: graphql.RecordType,
      description: "A Single Record by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Record identifier",
        },
      },
      resolve: (_, args) => resolver.recordById(args.id),
    },
    getRecords: {
      type: GraphQLList(graphql.RecordType),
      description: "List of All Records",
      resolve: () => resolver.allRecords(),
    },
    getTransactionById: {
      type: graphql.TransactionType,
      description: "A Single Transaction by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Transaction identifier",
        },
      },
      resolve: (_, args) => resolver.transactionById(args.id),
    },
    getTransactions: {
      type: GraphQLList(graphql.TransactionType),
      description: "List of All Transactions",
      resolve: () => resolver.allTransactions(),
    },
    getBatchById: {
      type: graphql.BatchType,
      description: "A Single Batch by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Batch identifier",
        },
      },
      resolve: (_, args) => resolver.batchById(args.id),
    },
    getBatches: {
      type: GraphQLList(graphql.BatchType),
      description: "List of All Batches",
      resolve: () => resolver.allBatches(),
    },
    getAccountById: {
      type: graphql.AccountType,
      description: "A Single Account by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Account identifier",
        },
      },
      resolve: (_, args) => resolver.accountById(args.id),
    },
    getAccounts: {
      type: GraphQLList(graphql.AccountType),
      description: "List of All Accounts",
      resolve: () => resolver.allAccounts(),
    },
    getBankPageRecordById: {
      type: graphql.BankPageRecordType,
      description: "A Single Bank Page Record by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Bank page record identifier",
        },
      },
      resolve: (_, args) => resolver.bankPageRecordById(args.id),
    },
    getBankPageRecords: {
      type: GraphQLList(graphql.BankPageRecordType),
      description: "List of All Bank Page Records",
      resolve: () => resolver.allBankPageRecords(),
    },
    getBankPageById: {
      type: graphql.BankPageType,
      description:
        "A Single Bank Page (Which Is A List Of Bank Page Records), by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Bank page identifier",
        },
      },
      resolve: (_, args) => resolver.bankPageById(args.id),
    },
    getBankPages: {
      type: GraphQLList(graphql.BankPageType),
      description: "List Of Bank Pages",
      resolve: () => resolver.allBankPages(),
    },
    getUserCompanies: {
      type: GraphQLList(graphql.CompanyType),
      description:
        "List of Companies for user token thats defined on: 'WizcloudApiPrivateKey'",
      resolve: () => hashavshevet.getCompanies(),
    },
    getUserDetails: {
      type: graphql.UserType,
      description: "Get User Details",
      resolve: () => hashavshevet.napi(),
    },
    checkBatch: {
      type: graphql.CheckBatchType,
      description: "Checks if there are errors in the batch",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "check the batch having this ID",
        },
      },
      resolve: (_, args) => resolver.checkBatchById(args.id),
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    newBatch: {
      type: graphql.NewBatchType,
      description: "Opens a new batch and return the number",
      resolve: () => hashavshevet.newBatch(),
    },
    issueBatch: {
      type: graphql.IssueBatchType,
      description:
        "Checks and inputs the temporary batch into the permanent storage",
      args: {
        id: {
          type: GraphQLInt,
          description: "Input the batch having this ID",
        },
      },
      resolve: (_, args) => resolver.issueBatch(args.id),
    },
    postTransactionsToBatch: {
      type: graphql.PostTransactionsResponseType,
      description:
        "Import transactions to a new or already existing temporary batch. You may check for errors or input the batch into the permanent storage (if no errors were found).",
      args: graphql.postTransactionsToBatchArgs,
      resolve: (_, args) => resolver.postTransactionsToBatch(args),
    },
    postBankPage: {
      type: graphql.PostBankPageResponseType,
      description: "Import  or update records to chosen index",
      args: {
        bankPageRecords: {
          type: GraphQLList(PostBankPageRecord),
          description: "Bank page's records details list",
        },
      },
      resolve: (_, args) => resolver.postBankPage(args),
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

function createSDL() {
  const dataForSDL = printSchema(schema);
  fs.writeFile(`./utils/graphql/SDL.graphql`, dataForSDL, "utf8", (err) => {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      console.log(err);
    }
  });
}

export { schema, createSDL };
