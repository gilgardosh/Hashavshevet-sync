import * as fs from "fs";
import { getHashData } from "./utils/wizcloudProccess/wizcloudProccess";
import { getAccountsList } from "./utils/wizcloudProccess/getAccountsList";
import { getBankDemiData } from "./utils/bankProccess/bankProccess";
import { compareBankHashData } from "./utils/compareAlgorithm";
import { date } from "./utils/getDate";

async function executeSync(months) {
  const promises = [
    getBankDemiData(date.startDateISO(months)),
    getHashData(date.startDateHash(months)),
    getAccountsList(),
  ];
  try {
    const results = await Promise.all(promises);
    const bankData = results[0];
    const hashData = results[1];
    const accountsList = results[2];
    saveToFile("./indexes/accountsList", accountsList);
    console.log("accountsList.json Index updated");
    

    const comparisonJson: object = compareBankHashData(bankData, hashData);
    // TODO: function that creates log file of comparison
    saveToFile(`./logs/${new Date().getTime()}_comparison.json`, comparisonJson);
    console.log("Comparison log created");
  } catch (error) {
    console.log("ERROR:", error);
  }
}

executeSync(2);

function saveToFile(filename: string, jsonObj) {
  let jsonContent = JSON.stringify(jsonObj, null, 2);

  fs.writeFile(`${filename}`, jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    };
  });
}
