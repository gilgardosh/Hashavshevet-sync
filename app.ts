import { getHashData } from "./wizcloudProccess";
import { getBankData } from "./bankProccess";
import { compareBankHashCata } from "./compareAlgorithm";

let hashData: Array<Object>;
let bankData: Array<Object> = (getBankData("./demiBankData.csv"));

getHashData().then((res) => {
  hashData = res;
  // console.log(hashData);
  compareBankHashCata(bankData, hashData);
});

//delete next line after debuging:
// hashData = require("./demiHashData.json").repdata
//////////////////////