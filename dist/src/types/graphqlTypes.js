"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const CompanyType = new graphql_1.GraphQLObjectType({
    // TODO: convers keys
    name: "Company",
    description: "A Single Hashavshevet Company",
    fields: () => ({
        Company_File_Name: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "",
        },
        Company_Name: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "",
        },
        Comp_Vatnum: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "",
        },
    }),
});
exports.CompanyType = CompanyType;
const UserType = new graphql_1.GraphQLObjectType({
    // TODO: convers keys
    name: "HashavshevetUser",
    description: "A Single User on Hashavshevet",
    fields: () => ({
        cid: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "",
        },
        user: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "",
        },
        use_name: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "",
        },
        wizcomp_no: {
            type: graphql_1.GraphQLString,
            description: "",
        },
        company_name: {
            type: graphql_1.GraphQLString,
            description: "",
        },
        user_id: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
            description: "",
        },
        company_id: {
            type: graphql_1.GraphQLInt,
            description: "",
        },
        branch: {
            type: graphql_1.GraphQLInt,
            description: "",
        },
    }),
});
exports.UserType = UserType;
__export(require("./batches"));
__export(require("./recordsTransactions"));
__export(require("./accounts"));
__export(require("./bankPages"));
//# sourceMappingURL=graphqlTypes.js.map