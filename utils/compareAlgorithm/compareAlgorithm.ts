import * as fs from "fs";
import { getHashData } from "../wizcloudProccess/wizcloudProccess";
import { getAccountsList } from "../wizcloudProccess/updateAccountsList";
import { getBankDemiData, getBankData } from "../bankProccess/bankProccess";
import { date } from "../dateFormater";

function compareBankHashData(bankData, hashData) {
  const matchTrans = {};
  const diffrentTrans = {
    bank: {},
    hashavshevet: {},
  };

  outerloop: for (const bankTrans of bankData[0]) {
    const bankSuF = bankTrans.SuF;
    const bankDate = bankTrans.valueDate;

    for (const hashTrans of hashData) {
      const hashSuF = parseFloat(hashTrans.suF);
      const hashDate =
        typeof hashTrans.valueDate === "string"
          ? hashTrans.valueDate.substr(0, hashTrans.valueDate.indexOf("T"))
          : "";
      // if same valueDate and suF add IDs to matchTrans
      if (bankDate === hashDate && bankSuF === hashSuF) {
        matchTrans[hashTrans.transID] = bankTrans.transID;
        continue outerloop;
      }
    }
    // if no match, add bank transaction to defferentTrans
    diffrentTrans.bank[bankTrans.transID] = bankTrans;
  }

  // if no match, add hashavshevet transaction to defferentTrans
  for (const hashTrans of hashData) {
    if (!(hashTrans.transID in matchTrans)) {
      diffrentTrans.hashavshevet[hashTrans.transID] = hashTrans;
    }
  }

  return {
    matchTrans,
    diffrentTrans,
  };
}

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
    console.log(hashData);
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
  const jsonContent = JSON.stringify(jsonObj, null, 2);

  fs.writeFile(`${filename}`, jsonContent, "utf8", (err) => {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      console.log(err);
    }
  });
}

export { executeSync };
