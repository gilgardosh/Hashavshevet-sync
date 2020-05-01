import { getHashData } from "./utils/wizcloudProccess";
import { getBankData } from "./utils/bankProccess";
import { compareBankHashData } from "./utils/compareAlgorithm";
import { date } from "./utils/getDate";

async function executeSync(months) {
  const promises = [
    getBankData(date.startDateISO(months)),
    getHashData(date.startDateHash(months)),
  ];
  try {
    const results = await Promise.all(promises);
    let bankData = results[0];
    let hashData = results[1];
    
    let comparisonJson: object = compareBankHashData(bankData, hashData);
    // TODO: function that creates log file of comparison
    console.log("comparisonJson", comparisonJson);
  } catch (error) {
    console.log("ERROR:", error);
  }
}

executeSync(6);
