import { getHashData } from "./utils/wizcloudProccess";
import { getBankData } from "./utils/bankProccess";
import { compareBankHashData } from "./utils/compareAlgorithm";
import { date } from "./utils/getDate";

async function executeSync(months) {
  const promises = [
    getBankData(date.startDateISO(months)),
    // getHashData(date.startDateHash(months)),
  ];
  try {
    const results = await Promise.all(promises);
    const bankData = results[0];
    console.log(bankData);
    
    // const hashData = results[1];

    // const comparisonJson: object = compareBankHashData(bankData, hashData);
    // // TODO: function that creates log file of comparison
    // console.log("comparisonJson", comparisonJson);
  } catch (error) {
    console.log("ERROR:", error);
  }
}

executeSync(2);
