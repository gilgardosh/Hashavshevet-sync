import express from "express";
import expressGraphQL from "express-graphql";
import { schema, createSDL } from "./utils/graphql/schema";
import { executeSync } from "./utils/compareAlgorithm/compareAlgorithm";

const app = express();
const PORT: number = 5000;

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema,
  })
);

createSDL();

app.listen(PORT, () => {
  console.log(`GrapiQL Server Running on http://localhost:${PORT}/graphql`);
});

// executeSync(2);
