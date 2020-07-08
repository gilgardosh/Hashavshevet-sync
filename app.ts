import express from "express";
import expressGraphQL from "express-graphql";
import { schema, createSDL } from "./src/schema";
import { useSofa, OpenAPI } from 'sofa-api';
import bodyParser from "body-parser";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const app = express();
const PORT: number = 5000;

const openApi = OpenAPI({
  schema,
  info: {
    title: 'Example API',
    version: '3.0.0',
  },
});


app.use(bodyParser.json());

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema,
  })
);

app.use('/api', useSofa({
  schema,
  onRoute(info) {
    openApi.addRoute(info, {
      basePath: '/api',
    });
  },
}));

openApi.save('./swagger.json');
openApi.save('./swagger.yml');

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

createSDL();

app.listen(PORT, () => {
  console.log(`GrapiQL Server Running on http://localhost:${PORT}/graphql`);
});
