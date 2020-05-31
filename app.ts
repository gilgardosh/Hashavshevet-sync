import express from "express";
import expressGraphQL from "express-graphql";
import { schema, createSDL } from "./utils/graphql/schema";
import { executeSync } from "./utils/compareAlgorithm/compareAlgorithm";

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema,
  })
);

createSDL();

app.listen(5000, () => {
  console.log("Server Running on");
  console.log("http://localhost:5000/graphql");
});

executeSync(2);
