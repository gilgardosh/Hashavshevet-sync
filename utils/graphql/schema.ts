import * as fs from "fs";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  printSchema,
  GraphQLBoolean,
} from "graphql";
import * as type from "./types";
import * as resolver from "./resolvers";
import * as hashavshevet from "../wizcloudProccess/wizCloudFetch";
import { PostBankPageRecord } from "./types/bankPages";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    recordById: {
      type: type.RecordType,
      description: "A Single Record by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return resolver.recordById(args.id);
      },
    },
    records: {
      type: GraphQLList(type.RecordType),
      description: "List of All Records",
      resolve: () => {
        return resolver.allRecords();
      },
    },
    transactionById: {
      type: type.TransactionType,
      description: "A Single Transaction by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return resolver.transactionById(args.id);
      },
    },
    transactions: {
      type: GraphQLList(type.TransactionType),
      description: "List of All Transactions",
      resolve: () => {
        return resolver.allTransactions();
      },
    },
    batchById: {
      type: type.BatchType,
      description: "A Single Batch by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return resolver.batchById(args.id);
      },
    },
    batches: {
      type: GraphQLList(type.BatchType),
      description: "List of All Batches",
      resolve: () => {
        return resolver.allBatches();
      },
    },
    accountById: {
      type: type.AccountType,
      description: "A Single Account by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return resolver.accountById(args.id);
      },
    },
    accounts: {
      type: GraphQLList(type.AccountType),
      description: "List of All Accounts",
      resolve: () => {
        return resolver.allAccounts();
      },
    },
    bankPageRecordById: {
      type: type.BankPageRecordType,
      description: "A Single Bank Page Record by its ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return resolver.bankPageRecordById(args.id);
      },
    },
    bankPageRecords: {
      type: GraphQLList(type.BankPageRecordType),
      description: "List of All Bank Page Records",
      resolve: () => {
        return resolver.allBankPageRecords();
      },
    },
    bankPageById: {
      type: type.BankPageType,
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
      type: GraphQLList(type.BankPageType),
      description: "List Of Bank Pages",
      resolve: () => {
        return resolver.allBankPages();
      },
    },
    userCompanies: {
      type: GraphQLList(type.CompanyType),
      description:
        "List of Companies for user token thats defined on: 'WizcloudApiPrivateKey'",
      resolve: () => {
        return hashavshevet.getCompanies();
      },
    },
    userDetails: {
      type: type.UserType,
      description: "Get User Details",
      resolve: () => {
        return hashavshevet.napi();
      },
    },
    checkBatch: {
      type: type.CheckBatchType,
      description: "Checks if there are errors in the batch",
      args: {
        batchId: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return hashavshevet.checkBatch({ batchNo: args.batchId });
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    newBatch: {
      type: type.NewBatchType,
      description: "Opens a new batch and return the number",
      resolve: () => {
        return hashavshevet.newBatch();
      },
    },
    issueBatch: {
      type: type.IssueBatchType,
      description:
        "Checks and inputs the temporary batch into the permanent storage",
      args: {
        batchId: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return hashavshevet.issueBatch({ batchNo: args.batchId });
      },
    },
    postTransactionsToBatch: {
      type: type.PostTransactionsResponseType,
      description:
        "Import transactions to a new or already existing temporary batch. You may check for errors or input the batch into the permanent storage (if no errors were found).",
      args: {
        batchId: { type: GraphQLInt },
        insertToLastBatch: { type: GraphQLBoolean },
        checkBatch: { type: GraphQLBoolean },
        issueBatch: { type: GraphQLBoolean },
        transactionsList: { type: GraphQLList(type.PostTransaction) },
      },
      resolve: (_, args) => {
        const rows = args.transactionsList.map((t) => {
          const moves = t.records.map((r) => ({
            AccountKey: r.accountId,
            DebitCredit: r.debitOrCreditNumber,
            SuF: r.shekelSum,
            SuFDlr: r.foreignCurrencySum,
          }));
          return {
            Branch: t.branch,
            CostCode: t.costingCode,
            CredName: t.creditorName,
            CurrencyCode: t.currencyCode,
            DatF3: t.date3,
            DebName: t.debtorName,
            Description: t.description,
            Det2: t.details2,
            Details: t.details1,
            DueDate: t.dueDate,
            Osek874: t.authorizedDealerNumber,
            Quant: t.quantity,
            Ref2: t.reference2,
            Ref3: t.reference3,
            Referance: t.reference1,
            SuF: t.shekelSum,
            SuFDlr: t.foreignCurrencySum,
            TransCredID: t.creditorId,
            TransDebID: t.debtorId,
            TransType: t.type,
            ValueDate: t.valueDate,
            moves: moves,
          };
        });
        return hashavshevet.addTransactionsToBatch({
          batchNo: args.batchId,
          insertolastb: args.insertToLastBatch,
          check: args.checkBatch,
          issue: args.issueBatch,
          rows: rows,
        });
      },
    },
    postBankPage: {
      type: type.PostBankPageResponseType,
      description: "Import  or update records to chosen index",
      args: {
        bankPageRecords: { type: GraphQLList(PostBankPageRecord) },
      },
      resolve: (_, args) => {
        return hashavshevet.importBankPageRecords({
          rows: args.bankPageRecords,
        });
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
  fs.writeFile(`./utils/graphql/SDL.graphql`, dataForSDL, "utf8", (err) => {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      console.log(err);
    }
  });
}

export { schema, createSDL };
