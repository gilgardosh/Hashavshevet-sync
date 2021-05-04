import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

const CompanyType = new GraphQLObjectType({
  // TODO: convers keys
  name: 'Company',
  description: 'A Single Hashavshevet Company',
  fields: () => ({
    companyFileName: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
    },
    companyName: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
    },
    compVatnum: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
    },
  }),
});

const UserType = new GraphQLObjectType({
  // TODO: convers keys
  name: 'HashavshevetUser',
  description: 'A Single User on Hashavshevet',
  fields: () => ({
    cid: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
    },
    user: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
    },
    useName: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
    },
    wizcompNo: {
      type: GraphQLString,
      description: '',
    },
    companyName: {
      type: GraphQLString,
      description: '',
    },
    userId: {
      type: GraphQLNonNull(GraphQLInt),
      description: '',
    },
    companyId: {
      type: GraphQLInt,
      description: '',
    },
    branch: {
      type: GraphQLInt,
      description: '',
    },
  }),
});
export * from './batches';
export * from './recordsTransactions';
export * from './accounts';
export * from './bankPages';
export { CompanyType, UserType };
