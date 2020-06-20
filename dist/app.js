"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const schema_1 = require("./src/schema");
const app = express_1.default();
const PORT = 5000;
app.use("/graphql", express_graphql_1.default({
    graphiql: true,
    schema: schema_1.schema,
}));
schema_1.createSDL();
app.listen(PORT, () => {
    console.log(`GrapiQL Server Running on http://localhost:${PORT}/graphql`);
});
//# sourceMappingURL=app.js.map