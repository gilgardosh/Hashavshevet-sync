"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const resolver = __importStar(require("../utils/resolvers"));
const graphqlType = __importStar(require("./graphqlTypes"));
const field = __importStar(require("./fields"));
const BankPageRecordType = new graphql_1.GraphQLObjectType({
    name: "BankPageRecord",
    description: "A Single Bank Page Record",
    fields: () => ({
        account: {
            type: graphqlType.AccountType,
            description: "Main account details",
            resolve: (record) => resolver.accountById(record.accountId),
        },
        accountId: field.accountId,
        accountName: field.accountName,
        adjustedRecord: field.adjustedRecord,
        bankPage: {
            type: BankPageType,
            description: "Bank page details",
            resolve: (record) => resolver.bankPageById(record.bankPageId),
        },
        bankPageId: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
            description: "Bank page identifier",
        },
        cumulativeBalance: field.cumulativeBalance,
        cumulativeBalanceCalculated: field.cumulativeBalanceCalculated,
        debitOrCredit: field.debitOrCreditNameForBank,
        details: field.details1,
        id: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
            description: "Bank page record identifier",
        },
        matchNumber: field.matchNumber,
        reference: field.reference1,
        sum: field.sum,
        date: field.date,
    }),
});
exports.BankPageRecordType = BankPageRecordType;
const BankPageType = new graphql_1.GraphQLObjectType({
    name: "BankPage",
    description: "A Single BA Single Bank Page (Which Is A List Of Bank Page Records)atch",
    fields: () => ({
        id: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
            description: "Bank page identifier",
        },
        bankPageRecords: {
            type: graphql_1.GraphQLList(BankPageRecordType),
            description: "Bank page's records details list",
            resolve: (page) => resolver.bankPageRecordsByBankPageId(page.id),
        },
    }),
});
exports.BankPageType = BankPageType;
const BankErrorType = new graphql_1.GraphQLObjectType({
    // TODO: convers keys
    name: "BankError",
    fields: () => ({
        index: {
            type: graphql_1.GraphQLInt,
            description: "Index",
        },
        err: {
            type: graphql_1.GraphQLString,
            description: "Error description",
        },
    }),
});
const PostBankPageRecord = new graphql_1.GraphQLInputObjectType({
    name: "PostBankPageRecord",
    description: "Interface for posting new Bank Page Record",
    fields: () => ({
        accountId: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "Account identifier (max 15 character)",
        },
        reference: field.reference1,
        creditOrDebit: {
            type: graphql_1.GraphQLNonNull(field.debitOrCreditNumberEnum),
            description: "Credit / Debit",
        },
        sum: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat),
            description: "Amount",
        },
        details: field.details1,
        date: field.date,
    }),
});
exports.PostBankPageRecord = PostBankPageRecord;
const PostBankPageResponseType = new graphql_1.GraphQLObjectType({
    name: "PostBankPageResponse",
    fields: () => ({
        status: {
            type: graphql_1.GraphQLString,
            description: "Post proccess status",
        },
        errors: {
            type: graphql_1.GraphQLList(BankErrorType),
            description: "Errors list",
        },
    }),
});
exports.PostBankPageResponseType = PostBankPageResponseType;
//# sourceMappingURL=bankPages.js.map