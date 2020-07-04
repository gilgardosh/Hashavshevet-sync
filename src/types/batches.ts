import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLUnionType } from 'graphql';
import * as resolver from '../utils/resolvers';
import * as type from './graphqlTypes';
import * as field from './fields';

const BatchType = new GraphQLObjectType({
    name: 'Batch',
    description: 'A Single Batch',
    fields: () => ({
        details: {
            type: GraphQLString,
            description: 'Remarks',
        },
        id: {
            type: GraphQLNonNull(GraphQLInt),
            description: 'Batch identifier',
        },
        initDate: field.initDate,
        initTime: field.initTime,
        issueDate: field.issueDate,
        records: {
            type: GraphQLList(type.RecordType),
            description: "Batch's records details list",
            resolve: (batch) => {
                return resolver.recordsByBatcnId(batch.id);
            },
        },
        status: field.status,
        transactions: {
            type: GraphQLList(type.TransactionType),
            description: "Batch's transactions details list",
            resolve: (batch) => {
                return resolver.transactionsByBatcnId(batch.id);
            },
        },
        type: field.batchType,
    }),
});

const recordErrorType = new GraphQLObjectType({
    // TODO: convers keys
    name: 'ARecordErrorDetails',
    fields: () => ({
        headerID: {
            type: GraphQLString,
            description: 'Transaction identifier. AKA transactionId',
        },
        err: {
            type: GraphQLInt,
            description: 'Error code', // TODO: whats the meaning of this err?
        },
        recId: {
            type: GraphQLInt,
            description: 'Record identifier. AKA recordId',
        },
        field: {
            type: GraphQLString,
            description: 'Field name where error occurred',
        },
        TxtMsg: {
            type: GraphQLString,
            description: 'Error message',
        },
        transaction: {
            type: type.TransactionType,
            description: 'Transaction details',
            resolve: (recordError) => {
                return resolver.transactionById(recordError.headerID);
            },
        },
        record: {
            type: type.RecordType,
            description: 'Record details',
            resolve: (recordError) => {
                return resolver.recordById(recordError.recId);
            },
        },
    }),
});

const BatchCheckIfListType = new GraphQLObjectType({
    // TODO: convers keys
    name: 'BatchCheckList',
    fields: () => ({
        batch_check: {
            type: GraphQLList(type.recordErrorType),
            description: 'Batch check errors list',
        },
    }),
});

const BatchCheckIfStringType = new GraphQLObjectType({
    // TODO: convers keys
    name: 'BatchCheckMessage',
    fields: () => ({
        batch_check: {
            type: GraphQLString,
            description: 'Batch check status',
        },
    }),
});

const CheckBatchType = new GraphQLUnionType({
    name: 'BatchErrorReport',
    types: [BatchCheckIfStringType, BatchCheckIfListType],
    description: 'An Error Report of a Batch',
    resolveType: (data) => {
        if (typeof data.batch_check === 'string') {
            return BatchCheckIfStringType;
        } else if (typeof data.batch_check === 'object') {
            return BatchCheckIfListType;
        }
    },
});

const createNewBatchType = new GraphQLObjectType({
    // TODO: convers keys
    name: 'NewBatch',
    fields: () => ({
        newbatch: {
            type: GraphQLInt,
            description: "New Batch's identifier",
        },
        batch: {
            type: type.BatchType,
            description: 'Batch details',
            resolve: (item) => {
                return resolver.batchById(item.newbatch);
            },
        },
    }),
});

const IssueBatchStatusType = new GraphQLObjectType({
    // TODO: convers keys
    name: 'IssueBatchStatus',
    fields: () => ({
        batch_issue: {
            type: GraphQLString,
            description: 'Batch issue status',
        },
    }),
});

const IssueBatchType = new GraphQLUnionType({
    name: 'IsuueBatch',
    types: [IssueBatchStatusType, BatchCheckIfStringType, BatchCheckIfListType],
    description: 'Batch issue response',
    resolveType: (data) => {
        if (data.batch_issue) {
            return IssueBatchStatusType;
        } else if (typeof data.batch_check === 'string') {
            return BatchCheckIfStringType;
        } else if (typeof data.batch_check === 'object') {
            return BatchCheckIfListType;
        }
    },
});

export { BatchType, CheckBatchType, IssueBatchType, createNewBatchType, recordErrorType };
