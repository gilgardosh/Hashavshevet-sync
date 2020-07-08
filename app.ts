import express from "express";
import expressGraphQL from "express-graphql";
import { schema, createSDL } from "./src/schema";
import { useSofa } from 'sofa-api';
import bodyParser from "body-parser";

const app = express();
const PORT: number = 5000;


app.use(bodyParser.json());

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema,
  })
);

app.use('/api', useSofa({ schema }));

createSDL();

app.listen(PORT, () => {
  console.log(`GrapiQL Server Running on http://localhost:${PORT}/graphql`);
});
