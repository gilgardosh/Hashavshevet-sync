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
        batch_id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return hashavshevet.checkBatch({ batchNo: args.batch_id });
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
        batch_id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return hashavshevet.issueBatch({ batchNo: args.batch_id });
      },
    },
    postTransactionsToBatch: {
      type: type.PostTransactionsResponseType,
      description:
        "Import transactions to a new or already existing temporary batch. You may check for errors or input the batch into the permanent storage (if no errors were found).",
      args: {
        batch_id: { type: GraphQLInt },
        insert_to_last_batch: { type: GraphQLBoolean },
        check_batch: { type: GraphQLBoolean },
        issue_batch: { type: GraphQLBoolean },
        transactions_list: { type: GraphQLList(type.PostTransaction) },
      },
      resolve: (_, args) => {
        const rows = args.transactions_list.map((t) => {
          const moves = t.records.map((r) => ({
            AccountKey: r.account_id,
            DebitCredit: r.debit_or_credit_number,
            SuF: r.shekel_sum,
            SuFDlr: r.foreign_currency_sum,
          }));
          return {
            Branch: t.branch,
            CostCode: t.costing_code,
            CredName: t.creditor_name,
            CurrencyCode: t.currency_code,
            DatF3: t.date3,
            DebName: t.debtor_name,
            Description: t.description,
            Det2: t.details2,
            Details: t.details1,
            DueDate: t.due_date,
            Osek874: t.authorized_dealer_number,
            Quant: t.quantity,
            Ref2: t.reference2,
            Ref3: t.reference3,
            Referance: t.reference1,
            SuF: t.shekel_sum,
            SuFDlr: t.foreign_currency_sum,
            TransCredID: t.creditor_id,
            TransDebID: t.debtor_id,
            TransType: t.type,
            ValueDate: t.value_date,
            moves: moves,
          };
        });
        return hashavshevet.addTransactionsToBatch({
          batchNo: args.batch_id,
          insertolastb: args.insert_to_last_batch,
          check: args.check_batch,
          issue: args.issue_batch,
          rows: rows,
        });
      },
    },
    postBankPage: {
      type: type.PostBankPageResponseType,
      description: "Import  or update records to chosen index",
      args: {
        bank_page_records: { type: GraphQLList(PostBankPageRecord) },
      },
      resolve: (_, args) => {
        return hashavshevet.importBankPageRecords({
          rows: args.bank_page_records,
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
