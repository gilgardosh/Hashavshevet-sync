import * as fs from "fs";
import { getHashData } from "./utils/wizcloudProccess/wizcloudProccess";
import { getAccountsList } from "./utils/wizcloudProccess/getAccountsList";
import {
  getBankDemiData,
  getBankData,
} from "./utils/bankProccess/bankProccess";
import { compareBankHashData } from "./utils/compareAlgorithm";
import { date } from "./utils/getDate";

async function executeSync(months) {
  const promises = [
    getBankData(date.startDateISO(months)),
    getHashData(date.startDateHash(months)),
    getAccountsList(),
  ];
  try {
    const results = await Promise.all(promises);
    const bankData = results[0];
    const hashData = results[1];
    const accountsList = results[2];
    saveToFile("./indexes/accountsList.json", accountsList);
    console.log("accountsList.json Index updated in indexes lib");

    const comparisonJson: object = compareBankHashData(bankData, hashData);
    // TODO: function that creates log file of comparison
    saveToFile(
      `./logs/${new Date().getTime()}_comparison.json`,
      comparisonJson
    );
    console.log("Comparison log created in logs lib");
  } catch (error) {
    console.log("ERROR:", error);
  }
}

function saveToFile(filename: string, jsonObj) {
  let jsonContent = JSON.stringify(jsonObj, null, 2);

  fs.writeFile(`${filename}`, jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      console.log(err);
    }
  });
}

// executeSync(2);

/////////////////////////////////////////////////////////////////////////////////

import express from "express";
import expressGraphQL from "express-graphql";
import { schema, createSDL } from "./utils/graphql/schema";
import { transactionsDataLoader } from "./utils/wizcloudProccess/getFormData";

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema: schema,
    context: () => ({
      loaders: {
        transactionsLoader: transactionsDataLoader(),
      },
    }),
  })
);

createSDL();

app.listen(5000, () => {
  console.log("Server Running on");
  console.log("http://localhost:5000/graphql");
});
