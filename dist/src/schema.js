"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const graphql_1 = require("graphql");
const graphqlType = __importStar(require("./types/graphqlTypes"));
const resolver = __importStar(require("./utils/resolvers"));
const hashavshevet = __importStar(require("./hashavshevet/wizcloud/wizCloudFetch"));
const RootQueryType = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: () => ({
        getRecordById: {
            type: graphqlType.RecordType,
            description: "A Single Record by its ID",
            args: {
                id: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                    description: "Record identifier",
                },
            },
            resolve: (_, args) => resolver.recordById(args.id),
        },
        getRecords: {
            type: graphql_1.GraphQLList(graphqlType.RecordType),
            description: "List of All Records",
            resolve: () => resolver.allRecords(),
        },
        getTransactionById: {
            type: graphqlType.TransactionType,
            description: "A Single Transaction by its ID",
            args: {
                id: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                    description: "Transaction identifier",
                },
            },
            resolve: (_, args) => resolver.transactionById(args.id),
        },
        getTransactions: {
            type: graphql_1.GraphQLList(graphqlType.TransactionType),
            description: "List of All Transactions",
            resolve: () => resolver.allTransactions(),
        },
        getBatchById: {
            type: graphqlType.BatchType,
            description: "A Single Batch by its ID",
            args: {
                id: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                    description: "Batch identifier",
                },
            },
            resolve: (_, args) => resolver.batchById(args.id),
        },
        getBatches: {
            type: graphql_1.GraphQLList(graphqlType.BatchType),
            description: "List of All Batches",
            resolve: () => resolver.allBatches(),
        },
        getAccountById: {
            type: graphqlType.AccountType,
            description: "A Single Account by its ID",
            args: {
                id: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                    description: "Account identifier",
                },
            },
            resolve: (_, args) => resolver.accountById(args.id),
        },
        getAccounts: {
            type: graphql_1.GraphQLList(graphqlType.AccountType),
            description: "List of All Accounts",
            resolve: () => resolver.allAccounts(),
        },
        getBankPageRecordById: {
            type: graphqlType.BankPageRecordType,
            description: "A Single Bank Page Record by its ID",
            args: {
                id: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                    description: "Bank page record identifier",
                },
            },
            resolve: (_, args) => resolver.bankPageRecordById(args.id),
        },
        getBankPageRecords: {
            type: graphql_1.GraphQLList(graphqlType.BankPageRecordType),
            description: "List of All Bank Page Records",
            resolve: () => resolver.allBankPageRecords(),
        },
        getBankPageById: {
            type: graphqlType.BankPageType,
            description: "A Single Bank Page (Which Is A List Of Bank Page Records), by its ID",
            args: {
                id: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                    description: "Bank page identifier",
                },
            },
            resolve: (_, args) => resolver.bankPageById(args.id),
        },
        getBankPages: {
            type: graphql_1.GraphQLList(graphqlType.BankPageType),
            description: "List Of Bank Pages",
            resolve: () => resolver.allBankPages(),
        },
        getUserCompanies: {
            type: graphql_1.GraphQLList(graphqlType.CompanyType),
            description: "List of Companies for user token thats defined on: 'WizcloudApiPrivateKey'",
            resolve: () => resolver.userCompanies(),
        },
        getUserDetails: {
            type: graphqlType.UserType,
            description: "Get User Details",
            resolve: () => resolver.userDetails(),
        },
        checkBatch: {
            type: graphqlType.CheckBatchType,
            description: "Checks if there are errors in the batch",
            args: {
                id: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                    description: "check the batch having this ID",
                },
            },
            resolve: (_, args) => resolver.checkBatchById(args.id),
        },
    }),
});
const RootMutationType = new graphql_1.GraphQLObjectType({
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
            description: "Checks and inputs the temporary batch into the permanent storage",
            args: {
                id: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                    description: "Input the batch having this ID",
                },
            },
            resolve: (_, args) => resolver.issueBatch(args.id),
        },
        postTransactionsToBatch: {
            type: graphqlType.PostTransactionsResponseType,
            description: "Import transactions to a new or already existing temporary batch. You may check for errors or input the batch into the permanent storage (if no errors were found).",
            args: graphqlType.postTransactionsToBatchArgs,
            resolve: (_, args) => resolver.postTransactionsToBatch(args),
        },
        postBankPage: {
            type: graphqlType.PostBankPageResponseType,
            description: "Import  or update records to chosen index",
            args: {
                bankPageRecords: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLList(graphqlType.PostBankPageRecord)),
                    description: "Bank page's records details list",
                },
            },
            resolve: (_, args) => resolver.postBankPage(args),
        },
    }),
});
const schema = new graphql_1.GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
});
exports.schema = schema;
function createSDL() {
    const dataForSDL = graphql_1.printSchema(schema);
    fs.writeFile(`./src/SDL.graphql`, dataForSDL, "utf8", (err) => {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            console.log(err);
        }
    });
}
exports.createSDL = createSDL;
//# sourceMappingURL=schema.js.map