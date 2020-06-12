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
      description: "Batch identifier",
    },
    type: {
      type: GraphQLString, // Enum type? NonNull?
      description: "Type",
    },
    status: {
      type: GraphQLString, // Enum type? NonNull?
      description: "Status",
    },
    issueDate: {
      type: GraphQLString, // Date type
      description: "Issue date of the batch",
    },
    details: {
      type: GraphQLString,
      description: "Remarks",
    },
    initTime: {
      type: GraphQLString,
      description: "Initiate time of the batch",
    },
    initDate: {
      type: GraphQLString, // Date type
      description: "Initiate date of the batch",
    },
    transactions: {
      type: GraphQLList(type.TransactionType),
      description: "Batch's transactions details list",
      resolve: (batch) => {
        return resolver.transactionsByBatcnId(batch.id);
      },
    },
    records: {
      type: GraphQLList(type.RecordType),
      description: "Batch's records details list",
      resolve: (batch) => {
        return resolver.recordsByBatcnId(batch.id);
      },
    },
  }),
});

const recordErrorType = new GraphQLObjectType({
  name: "ARecordErrorDetails",
  fields: () => ({
    headerID: {
      type: GraphQLString,
      description: "Transaction identifier. AKA transactionId",
    },
    err: {
      type: GraphQLInt,
      description: "",
    },
    recId: {
      type: GraphQLInt,
      description: "Record identifier. AKA recordId",
    },
    field: {
      type: GraphQLString,
      description: "",
    },
    TxtMsg: {
      type: GraphQLString,
      description: "",
    },
    transaction: {
      type: type.BatchType,
      description: "Transaction details",
      resolve: (recordError) => {
        return resolver.transactionById(recordError.headerID);
      },
    },
    record: {
      type: type.BatchType,
      description: "Record details",
      resolve: (recordError) => {
        return resolver.recordById(recordError.recId);
      },
    },
  }),
});

const BatchCheckIfListType = new GraphQLObjectType({
  name: "BatchCheckList",
  fields: () => ({
    batch_check: {
      type: GraphQLList(type.recordErrorType),
      description: "Batch check errors list",
    },
  }),
});

const BatchCheckIfStringType = new GraphQLObjectType({
  name: "BatchCheckMessage",
  fields: () => ({
    batch_check: {
      type: GraphQLString,
      description: "Batch check status",
    },
  }),
});

const CheckBatchType = new GraphQLUnionType({
  name: "BatchErrorReport",
  types: [BatchCheckIfStringType, BatchCheckIfListType],
  description: "An Error Report of a Batch",
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
    newbatch: {
      type: GraphQLInt,
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

const IssueBatchStatusType = new GraphQLObjectType({
  name: "IssueBatchStatus",
  fields: () => ({
    batch_issue: {
      type: GraphQLString,
      description: "Batch issue status",
    },
  }),
});

const IssueBatchType = new GraphQLUnionType({
  name: "IsuueBatch",
  types: [IssueBatchStatusType, BatchCheckIfStringType, BatchCheckIfListType],
  description: "Batch issue response",
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
