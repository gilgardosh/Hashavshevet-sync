import * as fs from "fs";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  printSchema,
  GraphQLNonNull,
} from "graphql";
import * as graphqlType from "./types/graphqlTypes";
import * as resolver from "./resolvers";
import * as hashavshevet from "./hashavshevet/wizcloud/wizCloudFetch";
import * as type from "./types/types";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    getRecordById: {
      type: graphqlType.RecordType,
      description: "A Single Record by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Record identifier",
        },
      },
      resolve: (_, args: type.QueryGetRecordByIdArgs) => resolver.recordById(args.id),
    },
    getRecords: {
      type: GraphQLList(graphqlType.RecordType),
      description: "List of All Records",
      resolve: () => resolver.allRecords(),
    },
    getTransactionById: {
      type: graphqlType.TransactionType,
      description: "A Single Transaction by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Transaction identifier",
        },
      },
      resolve: (_, args: type.QueryGetTransactionByIdArgs) => resolver.transactionById(args.id),
    },
    getTransactions: {
      type: GraphQLList(graphqlType.TransactionType),
      description: "List of All Transactions",
      resolve: () => resolver.allTransactions(),
    },
    getBatchById: {
      type: graphqlType.BatchType,
      description: "A Single Batch by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Batch identifier",
        },
      },
      resolve: (_, args: type.QueryGetBatchByIdArgs) => resolver.batchById(args.id),
    },
    getBatches: {
      type: GraphQLList(graphqlType.BatchType),
      description: "List of All Batches",
      resolve: () => resolver.allBatches(),
    },
    getAccountById: {
      type: graphqlType.AccountType,
      description: "A Single Account by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Account identifier",
        },
      },
      resolve: (_, args: type.QueryGetAccountByIdArgs) => resolver.accountById(args.id),
    },
    getAccounts: {
      type: GraphQLList(graphqlType.AccountType),
      description: "List of All Accounts",
      resolve: () => resolver.allAccounts(),
    },
    getBankPageRecordById: {
      type: graphqlType.BankPageRecordType,
      description: "A Single Bank Page Record by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Bank page record identifier",
        },
      },
      resolve: (_, args: type.QueryGetBankPageRecordByIdArgs) => resolver.bankPageRecordById(args.id),
    },
    getBankPageRecords: {
      type: GraphQLList(graphqlType.BankPageRecordType),
      description: "List of All Bank Page Records",
      resolve: () => resolver.allBankPageRecords(),
    },
    getBankPageById: {
      type: graphqlType.BankPageType,
      description:
        "A Single Bank Page (Which Is A List Of Bank Page Records), by its ID",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Bank page identifier",
        },
      },
      resolve: (_, args: type.QueryGetBankPageByIdArgs) => resolver.bankPageById(args.id),
    },
    getBankPages: {
      type: GraphQLList(graphqlType.BankPageType),
      description: "List Of Bank Pages",
      resolve: () => resolver.allBankPages(),
    },
    getUserCompanies: {
      type: GraphQLList(graphqlType.CompanyType),
      description:
        "List of Companies for user token thats defined on: 'WizcloudApiPrivateKey'",
      resolve: () => hashavshevet.getCompanies(),
    },
    getUserDetails: {
      type: graphqlType.UserType,
      description: "Get User Details",
      resolve: () => hashavshevet.napi(),
    },
    checkBatch: {
      type: graphqlType.CheckBatchType,
      description: "Checks if there are errors in the batch",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "check the batch having this ID",
        },
      },
      resolve: (_, args: type.QueryCheckBatchArgs) => resolver.checkBatchById(args.id),
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    createNewBatch: {
      type: graphqlType.createNewBatchType,
      description: "Opens a new batch and return the number",
      resolve: () => hashavshevet.newBatch(),
    },
    issueBatch: {
      type: graphqlType.IssueBatchType,
      description:
        "Checks and inputs the temporary batch into the permanent storage",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: "Input the batch having this ID",
        },
      },
      resolve: (_, args: type.MutationIssueBatchArgs) => resolver.issueBatch(args.id),
    },
    postTransactionsToBatch: {
      type: graphqlType.PostTransactionsResponseType,
      description:
        "Import transactions to a new or already existing temporary batch. You may check for errors or input the batch into the permanent storage (if no errors were found).",
      args: graphqlType.postTransactionsToBatchArgs,
      resolve: (_, args: type.MutationPostTransactionsToBatchArgs) => resolver.postTransactionsToBatch(args),
    },
    postBankPage: {
      type: graphqlType.PostBankPageResponseType,
      description: "Import  or update records to chosen index",
      args: {
        bankPageRecords: {
          type: GraphQLNonNull(GraphQLList(graphqlType.PostBankPageRecord)),
          description: "Bank page's records details list",
        },
      },
      resolve: (_, args: type.MutationPostBankPageArgs) => resolver.postBankPage(args),
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

function createSDL() {
  const dataForSDL = printSchema(schema);
  fs.writeFile(`./src/SDL.graphql`, dataForSDL, "utf8", (err) => {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      console.log(err);
    }
  });
}

export { schema, createSDL };
