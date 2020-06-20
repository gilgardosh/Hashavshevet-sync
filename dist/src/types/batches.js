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
const resolver = __importStar(require("../resolvers"));
const type = __importStar(require("./graphqlTypes"));
const field = __importStar(require("./fields"));
const BatchType = new graphql_1.GraphQLObjectType({
    name: "Batch",
    description: "A Single Batch",
    fields: () => ({
        details: {
            type: graphql_1.GraphQLString,
            description: "Remarks",
        },
        id: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
            description: "Batch identifier",
        },
        initDate: field.initDate,
        initTime: field.initTime,
        issueDate: field.issueDate,
        records: {
            type: graphql_1.GraphQLList(type.RecordType),
            description: "Batch's records details list",
            resolve: (batch) => {
                return resolver.recordsByBatcnId(batch.id);
            },
        },
        status: field.status,
        transactions: {
            type: graphql_1.GraphQLList(type.TransactionType),
            description: "Batch's transactions details list",
            resolve: (batch) => {
                return resolver.transactionsByBatcnId(batch.id);
            },
        },
        type: field.batchType,
    }),
});
exports.BatchType = BatchType;
const recordErrorType = new graphql_1.GraphQLObjectType({
    name: "ARecordErrorDetails",
    fields: () => ({
        headerID: {
            type: graphql_1.GraphQLString,
            description: "Transaction identifier. AKA transactionId",
        },
        err: {
            type: graphql_1.GraphQLInt,
            description: "Error code",
        },
        recId: {
            type: graphql_1.GraphQLInt,
            description: "Record identifier. AKA recordId",
        },
        field: {
            type: graphql_1.GraphQLString,
            description: "Field name where error occurred",
        },
        TxtMsg: {
            type: graphql_1.GraphQLString,
            description: "Error message",
        },
        transaction: {
            type: type.TransactionType,
            description: "Transaction details",
            resolve: (recordError) => {
                return resolver.transactionById(recordError.headerID);
            },
        },
        record: {
            type: type.RecordType,
            description: "Record details",
            resolve: (recordError) => {
                return resolver.recordById(recordError.recId);
            },
        },
    }),
});
exports.recordErrorType = recordErrorType;
const BatchCheckIfListType = new graphql_1.GraphQLObjectType({
    name: "BatchCheckList",
    fields: () => ({
        batch_check: {
            type: graphql_1.GraphQLList(type.recordErrorType),
            description: "Batch check errors list",
        },
    }),
});
const BatchCheckIfStringType = new graphql_1.GraphQLObjectType({
    name: "BatchCheckMessage",
    fields: () => ({
        batch_check: {
            type: graphql_1.GraphQLString,
            description: "Batch check status",
        },
    }),
});
const CheckBatchType = new graphql_1.GraphQLUnionType({
    name: "BatchErrorReport",
    types: [BatchCheckIfStringType, BatchCheckIfListType],
    description: "An Error Report of a Batch",
    resolveType: (data) => {
        if (typeof data.batch_check === "string") {
            return BatchCheckIfStringType;
        }
        else if (typeof data.batch_check === "object") {
            return BatchCheckIfListType;
        }
    },
});
exports.CheckBatchType = CheckBatchType;
const createNewBatchType = new graphql_1.GraphQLObjectType({
    name: "NewBatch",
    fields: () => ({
        newbatch: {
            type: graphql_1.GraphQLInt,
            description: "New Batch's identifier",
        },
        batch: {
            type: type.BatchType,
            description: "Batch details",
            resolve: (item) => {
                return resolver.batchById(item.newbatch);
            },
        },
    }),
});
exports.createNewBatchType = createNewBatchType;
const IssueBatchStatusType = new graphql_1.GraphQLObjectType({
    name: "IssueBatchStatus",
    fields: () => ({
        batch_issue: {
            type: graphql_1.GraphQLString,
            description: "Batch issue status",
        },
    }),
});
const IssueBatchType = new graphql_1.GraphQLUnionType({
    name: "IsuueBatch",
    types: [IssueBatchStatusType, BatchCheckIfStringType, BatchCheckIfListType],
    description: "Batch issue response",
    resolveType: (data) => {
        if (data.batch_issue) {
            return IssueBatchStatusType;
        }
        else if (typeof data.batch_check === "string") {
            return BatchCheckIfStringType;
        }
        else if (typeof data.batch_check === "object") {
            return BatchCheckIfListType;
        }
    },
});
exports.IssueBatchType = IssueBatchType;
//# sourceMappingURL=batches.js.map