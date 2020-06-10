import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLUnionType,
} from "graphql";
import * as resolver from "../resolvers";
import * as type from "../types";

const BatchType = new GraphQLObjectType({
  name: "Batch",
  description: "A Single Batch",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    type: {
      type: GraphQLString, // Enum type? NonNull?
    },
    status: {
      type: GraphQLString, // Enum type? NonNull?
    },
    issueDate: {
      type: GraphQLString, // Date type
    },
    details: {
      type: GraphQLString,
    },
    initTime: {
      type: GraphQLString,
    },
    initDate: {
      type: GraphQLString, // Date type
    },
    transactions: {
      type: GraphQLList(type.TransactionType),
      resolve: (batch) => {
        return resolver.transactionsByBatcnId(batch.id);
      },
    },
    records: {
      type: GraphQLList(type.RecordType),
      resolve: (batch) => {
        return resolver.recordsByBatcnId(batch.id);
      },
    },
  }),
});

const recordErrorType = new GraphQLObjectType({
  name: "ARecordErrorDetails",
  fields: () => ({
    headerID: { type: GraphQLString, description: "AKA transactionId" },
    err: { type: GraphQLInt },
    recId: { type: GraphQLInt, description: "AKA recordId" },
    field: { type: GraphQLString },
    TxtMsg: { type: GraphQLString },
    transaction: {
      type: type.BatchType,
      resolve: (recordError) => {
        return resolver.transactionById(recordError.headerID);
      },
    },
    record: {
      type: type.BatchType,
      resolve: (recordError) => {
        return resolver.recordById(recordError.recId);
      },
    },
  }),
});

const BatchCheckIfListType = new GraphQLObjectType({
  name: "BatchCheckList",
  fields: () => ({
    batch_check: { type: GraphQLList(type.recordErrorType) },
  }),
});

const BatchCheckIfStringType = new GraphQLObjectType({
  name: "BatchCheckMessage",
  fields: () => ({
    batch_check: { type: GraphQLString },
  }),
});

const CheckBatchType = new GraphQLUnionType({
  name: "BatchErrorReport",
  description: "An Error Report of a Batch",
  types: [BatchCheckIfStringType, BatchCheckIfListType],
  resolveType: (data) => {
    if (typeof data.batch_check === "string") {
      return BatchCheckIfStringType;
    } else if (typeof data.batch_check === "object") {
      return BatchCheckIfListType;
    }
  },
});

const NewBatchType = new GraphQLObjectType({
  name: "NewBatch",
  fields: () => ({
    newbatch: { type: GraphQLInt },
    batch: {
      type: type.BatchType,
      resolve: (item) => {
        return resolver.batchById(item.newbatch);
      },
    },
  }),
});

const IssueBatchStatusType = new GraphQLObjectType({
  name: "IssueBatchStatus",
  fields: () => ({
    batch_issue: { type: GraphQLString },
  }),
});

const IssueBatchType = new GraphQLUnionType({
  name: "IsuueBatch",
  types: [IssueBatchStatusType, BatchCheckIfStringType, BatchCheckIfListType],
  resolveType: (data) => {
    if (data.batch_issue) {
      return IssueBatchStatusType;
    } else if (typeof data.batch_check === "string") {
      return BatchCheckIfStringType;
    } else if (typeof data.batch_check === "object") {
      return BatchCheckIfListType;
    }
  },
});

export {
  BatchType,
  CheckBatchType,
  IssueBatchType,
  NewBatchType,
  recordErrorType,
};
