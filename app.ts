import { getHashData } from "./utils/wizcloudProccess";
import { getBankData } from "./utils/bankProccess";
import { compareBankHashData } from "./utils/compareAlgorithm";

let hashData: object[];
const bankData: object[] = (getBankData("./demiData/demiBankData.csv"));

getHashData().then((res) => {
  hashData = res;
  // console.log(hashData);
  console.log(compareBankHashData(bankData, hashData));
});
