import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import { TransactionType } from "./types";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    // book: {
    //   type: BookType,
    //   description: "A Single Book",
    //   args: {
    //     id: { type: GraphQLInt },
    //   },
    //   resolve: (_, args) => books.find((book) => book.id === args.id),
    // },
    // books: {
    //   type: new GraphQLList(BookType),
    //   description: "List of All Books",
    //   resolve: () => books,
    // },
    // author: {
    //   type: AuthorType,
    //   description: "A Single Author",
    //   args: {
    //     id: { type: GraphQLInt },
    //   },
    //   resolve: (_, args) => authors.find((author) => author.id === args.id),
    // },
    // authors: {
    //   type: new GraphQLList(AuthorType),
    //   description: "List of All Authors",
    //   resolve: () => authors,
    // },
    transactionById: {
      type: TransactionType,
      description: "A Single Transaction",
      args: {
        id: { type: GraphQLInt },
      },
      resole: (_, args) => transactions.find((trans) => trans.id === args.id),
    },

    // transactions: {},
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: "RootMutationType", //add real mutation
});

export { schema };
