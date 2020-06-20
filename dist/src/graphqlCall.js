"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
function graphqlCall(query, variables = {}) {
    return node_fetch_1.default("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
        return data.data;
    });
}
exports.default = graphqlCall;
//# sourceMappingURL=graphqlCall.js.map