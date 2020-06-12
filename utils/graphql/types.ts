import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";

const CompanyType = new GraphQLObjectType({
  name: "Company",
  description: "A Single Hashavshevet Company",
  fields: () => ({
    Company_File_Name: {
      type: GraphQLNonNull(GraphQLString),
    },
    Company_Name: {
      type: GraphQLNonNull(GraphQLString),
    },
    Comp_Vatnum: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "HashavshevetUser",
  description: "A Single User on Hashavshevet",
  fields: () => ({
    cid: {
      type: GraphQLNonNull(GraphQLString),
    },
    user: {
      type: GraphQLNonNull(GraphQLString),
    },
    use_name: {
      type: GraphQLNonNull(GraphQLString),
    },
    wizcomp_no: {
      type: GraphQLString,
    },
    company_name: {
      type: GraphQLString,
    },
    user_id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    company_id: {
      type: GraphQLInt,
    },
    branch: {
      type: GraphQLInt,
    },
  }),
});
export * from "./types/batches";
export * from "./types/recordsTransactions";
export * from "./types/accounts";
export * from "./types/bankPages";
export { CompanyType, UserType };
